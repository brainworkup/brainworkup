// Add defer attribute to render-blocking scripts
document.addEventListener("DOMContentLoaded", function () {
  // List of script URLs to add defer attribute to
  const scriptsToDefer = [
    "site_libs/quarto-search/autocomplete.umd.js",
    "site_libs/quarto-search/quarto-search.js",
    "site_libs/cookie-consent/cookie-consent.js",
    "site_libs/bootstrap/bootstrap.min.js",
    "https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch-lite.umd.js",
  ];

  // Find all script tags
  const scripts = document.querySelectorAll("script");

  // Loop through scripts and add defer attribute to matching ones
  scripts.forEach((script) => {
    if (script.src) {
      for (const scriptUrl of scriptsToDefer) {
        if (
          script.src.includes(scriptUrl) &&
          !script.hasAttribute("defer") &&
          !script.hasAttribute("async")
        ) {
          script.defer = true;
          console.log("Added defer to:", script.src);
          break;
        }
      }
    }
  });
});
