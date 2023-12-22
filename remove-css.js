const fs = require("fs");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["~/brainworkup/_site/index.html/**/*.html"],

  // This is the function used to extract class names from your templates
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    return broadMatches.concat(innerMatches);
  },
});

require("postcss")([purgecss])
  .process(fs.readFileSync("styles.css", "utf8"), {
    from: "styles.css",
    to: "styles2.css",
  })
  .then((result) => fs.writeFileSync("styles2.css", result.css));
