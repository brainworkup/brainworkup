// Define structured data for MedicalOrganization
const medicalOrganizationData = {
  "@context": "http://schema.org",
  "@type": "MedicalOrganization",
  "name": "BrainWorkUp Neuropsychology, LLC",
  "url": "https://brainworkup.org/",
  "logo": "https://brainworkup.org/hero.png",
  "description": "BrainWorkUp Neuropsychology provides comprehensive evaluations for ADHD, dyslexia, learning disorders, forensic examinations, and psychiatric assessments.",
  "founder": {
    "@type": "Person",
    "name": "Joey Trampush, PhD"
  },
  "specialty": [
    "Neuropsychological assessment",
    "ADHD evaluation",
    "Learning disorder evaluation"
  ]
};

// Define structured data for MedicalWebPage
const medicalWebPageData = {
  "@context": "http://schema.org",
  "@type": "MedicalWebPage",
  "url": "https://brainworkup.org/adhd-in-girls",
  "name": "ADHD in Girls",
  "mainEntity": {
    "@type": "MedicalCondition",
    "name": "Attention Deficit Hyperactivity Disorder"
  }
};

// Function to inject structured data into the head of the document
function injectStructuredData(data) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

// Inject structured data into the page
injectStructuredData(medicalOrganizationData);
injectStructuredData(medicalWebPageData);
