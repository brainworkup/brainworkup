#!/usr/bin/env node
// post-render.js
// Quarto post-render hook: adds `defer` to render-blocking scripts in built HTML.
// This runs after `quarto render` completes, before Netlify plugins run.

const fs = require("fs");
const path = require("path");

const siteDir = path.join(__dirname, "_site");

// URL fragments that identify render-blocking scripts Quarto injects without defer.
// Inline scripts that depend on these are wrapped in DOMContentLoaded handlers,
// so deferring the library is safe (deferred scripts run before DOMContentLoaded fires).
const DEFER_PATTERNS = [
  "quarto-search/autocomplete.umd.js",
  "quarto-search/fuse.min.js",
  "quarto-search/quarto-search.js",
  "cookie-consent.js",
  "bootstrap/bootstrap.min.js",
  "algoliasearch-lite.umd.js",
];

function walkHtmlFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...walkHtmlFiles(full));
    } else if (entry.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

function escapeForRegex(str) {
  return str.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
}

// Pre-compile all regex patterns once (greedy [^>]* — no backtracking needed
// since the character class already excludes '>').
const DEFER_REGEXES = DEFER_PATTERNS.map((pattern) => ({
  pattern,
  re: new RegExp(
    `<script((?![^>]*\\bdefer\\b)(?![^>]*\\basync\\b)[^>]*src="[^"]*${escapeForRegex(pattern)}[^"]*"[^>]*)>`,
    "g"
  ),
}));

let totalModified = 0;

for (const file of walkHtmlFiles(siteDir)) {
  let html = fs.readFileSync(file, "utf-8");
  let changed = false;

  for (const { re } of DEFER_REGEXES) {
    re.lastIndex = 0; // reset stateful global regex before each file
    const next = html.replace(re, (_match, attrs) => {
      changed = true;
      return `<script${attrs} defer>`;
    });
    html = next;
  }

  if (changed) {
    fs.writeFileSync(file, html, "utf-8");
    totalModified++;
  }
}

console.log(
  `[post-render] Added defer to render-blocking scripts in ${totalModified} HTML file(s).`
);
