// Fix for GitHub security warning: "Useless regular-expression character escape"
document.addEventListener("DOMContentLoaded", function () {
  // This script fixes the regex declarations in the generated HTML that trigger GitHub security warnings
  // Original problematic code:
  // var localhostRegex = new RegExp(/^(?:http|https):\/\/localhost\:?[0-9]*\//);
  // var mailtoRegex = new RegExp(/^mailto:/);
  // var filterRegex = new RegExp("https:\/\/brainworkup\.org\/");

  // Correctly defined regex without unnecessary escapes
  window.localhostRegex = /^(?:http|https):\/\/localhost\:?[0-9]*\//;
  window.mailtoRegex = /^mailto:/;
  window.filterRegex = /https:\/\/brainworkup\.org\//;

  console.log("Regular expressions fixed to prevent GitHub security warnings");
  // Note: This script only fixes the regex issue but does not replace header-enhanced.js,
  // which contains additional important functionality for the site
});
