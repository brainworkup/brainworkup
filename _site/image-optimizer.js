// Image optimization for better Core Web Vitals scores
document.addEventListener("DOMContentLoaded", function () {
  // Find all images that aren't in the viewport
  const lazyImages = document.querySelectorAll("img:not([loading])");

  // Add native lazy loading to images that aren't in the initial viewport
  lazyImages.forEach((img) => {
    // Skip images with fetchpriority="high" as they should load immediately
    if (img.getAttribute("fetchpriority") !== "high") {
      img.setAttribute("loading", "lazy");

      // If it's a large image, also add decoding="async"
      if (img.width > 200 || img.height > 200) {
        img.setAttribute("decoding", "async");
      }
    }
  });

  // Image format detection for WebP support
  const checkWebpSupport = function () {
    const webpImage = new Image();
    webpImage.onload = function () {
      const supportsWebp = webpImage.width > 0 && webpImage.height > 0;
      if (supportsWebp) {
        // Browser supports WebP, replace PNG/JPG images with WebP versions if available
        const regularImages = document.querySelectorAll(
          'img[src$=".png"], img[src$=".jpg"], img[src$=".jpeg"]'
        );
        regularImages.forEach((img) => {
          const currentSrc = img.getAttribute("src");
          const webpSrc = currentSrc.replace(/\.(png|jpg|jpeg)$/, ".webp");

          // Create a test image object to check if WebP version exists
          const testWebp = new Image();
          testWebp.onload = function () {
            img.setAttribute("src", webpSrc);
          };
          testWebp.src = webpSrc;
        });
      }
    };
    webpImage.src =
      "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
  };

  // Run WebP detection
  checkWebpSupport();
});
