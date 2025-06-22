// Wait for DOM to be fully loaded to avoid render blocking
document.addEventListener("DOMContentLoaded", function () {
  // Get current page URL
  const currentUrl = window.location.href;
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const currentPage =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "";

  // Define structured data for MedicalOrganization
  const medicalOrganizationData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "BrainWorkup Neuropsychology, LLC",
    url: "https://brainworkup.org/",
    logo: "https://brainworkup.org/logo.webp",
    description:
      "BrainWorkup Neuropsychology provides expert neuropsychological evaluations for ADHD, dyslexia, learning disorders, autism, executive function, and forensic assessments in Los Angeles and Southern California.",
    founder: {
      "@type": "Person",
      name: "Joey W. Trampush, PhD",
    },
    specialty: [
      "Neuropsychological assessment",
      "ADHD evaluation",
      "Learning disorder evaluation",
      "Adult ADHD",
      "ADHD in girls",
      "Executive function assessment",
      "Forensic neuropsychology",
    ],
  };

  // Define dynamic structured data for current page
  let pageSpecificData = {};

  // Customize structured data based on current page
  switch (currentPage) {
    case "adhd-in-girls":
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        url: currentUrl,
        name: "ADHD in Girls",
        mainEntity: {
          "@type": "MedicalCondition",
          name: "Attention Deficit Hyperactivity Disorder in Girls",
        },
      };
      break;
    case "adult-onset-adhd":
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        url: currentUrl,
        name: "Adult-Onset ADHD",
        mainEntity: {
          "@type": "MedicalCondition",
          name: "Adult-Onset Attention Deficit Hyperactivity Disorder",
        },
      };
      break;
    default:
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: currentUrl,
        name: "BrainWorkup Neuropsychology",
      };
  }

  // Function to inject structured data into the head of the document
  function injectStructuredData(data) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Inject structured data into the page
  injectStructuredData(medicalOrganizationData);
  injectStructuredData(pageSpecificData);
});
