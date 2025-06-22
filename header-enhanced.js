// Enhanced header.js with improved SEO and performance optimizations
document.addEventListener("DOMContentLoaded", function () {
  // Get current page information
  const currentUrl = window.location.href;
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const currentPage =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "";

  // Enhanced MedicalOrganization + LocalBusiness schema
  const organizationData = {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "LocalBusiness"],
    "@id": "https://brainworkup.org/#organization",
    name: "BrainWorkup Neuropsychology, LLC",
    alternateName: "BrainWorkup",
    url: "https://brainworkup.org/",
    logo: {
      "@type": "ImageObject",
      url: "https://brainworkup.org/logo.webp",
      width: 253,
      height: 253,
    },
    image: "https://brainworkup.org/hero.webp",
    description:
      "Expert neuropsychological testing and ADHD evaluations in Los Angeles. Dr. Joey Trampush provides comprehensive assessments for children and adults in Marina Del Rey, West LA, Santa Monica, and surrounding areas.",
    telephone: "+1-213-495-1155",
    email: "info@brainworkup.org",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marina Del Rey",
      addressRegion: "CA",
      postalCode: "90292",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.9802893,
      longitude: -118.4517449,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Los Angeles",
      },
      {
        "@type": "City",
        name: "Marina Del Rey",
      },
      {
        "@type": "City",
        name: "Santa Monica",
      },
      {
        "@type": "City",
        name: "Venice",
      },
      {
        "@type": "City",
        name: "Manhattan Beach",
      },
      {
        "@type": "City",
        name: "West Los Angeles",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$$",
    paymentAccepted: ["Cash", "Check", "Credit Card", "Insurance"],
    founder: {
      "@type": "Person",
      "@id": "https://brainworkup.org/#drtrampush",
      name: "Joey W. Trampush, PhD",
      jobTitle: "Clinical Neuropsychologist",
      affiliation: {
        "@type": "EducationalOrganization",
        name: "USC Keck School of Medicine",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Southern California",
        },
      ],
      knowsAbout: [
        "Neuropsychology",
        "ADHD",
        "Learning Disabilities",
        "Autism",
        "Forensic Psychology",
      ],
    },
    medicalSpecialty: [
      {
        "@type": "MedicalSpecialty",
        name: "Neuropsychology",
      },
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "ADHD Testing Los Angeles",
        description:
          "Comprehensive ADHD evaluations for children and adults in Los Angeles",
      },
      {
        "@type": "MedicalProcedure",
        name: "Autism Assessment",
        description:
          "Expert autism spectrum disorder evaluations using gold-standard tools",
      },
      {
        "@type": "MedicalProcedure",
        name: "Learning Disability Testing",
        description:
          "Complete psychoeducational evaluations for dyslexia and learning disorders",
      },
      {
        "@type": "MedicalProcedure",
        name: "Neuropsychological Testing",
        description:
          "Comprehensive cognitive assessments for memory, attention, and executive function",
      },
      {
        "@type": "MedicalProcedure",
        name: "Forensic Neuropsychology",
        description:
          "Expert witness and independent medical examinations for legal cases",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/joey-trampush-brainworkup/",
      "https://twitter.com/brainworkup",
      "https://instagram.com/brainworkup",
      "https://github.com/brainworkup",
    ],
  };

  // Dynamic page-specific structured data
  let pageSpecificData = {};

  // Enhanced page-specific schemas with local SEO
  switch (currentPage) {
    case "":
    case "index":
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "@id": currentUrl,
        url: currentUrl,
        name: "Neuropsychological Testing Los Angeles | ADHD Evaluations | BrainWorkup",
        description:
          "Expert neuropsychological testing in Los Angeles. Dr. Joey Trampush provides ADHD evaluations, autism assessments, and learning disability testing in Marina Del Rey. Call (213) 495-1155.",
        isPartOf: {
          "@id": "https://brainworkup.org/#website",
        },
        about: {
          "@type": "MedicalSpecialty",
          name: "Neuropsychology",
        },
        keywords:
          "neuropsychologist los angeles, adhd testing los angeles, neuropsychological evaluation near me, adhd specialist marina del rey, learning disability testing west la",
      };
      break;

    case "adhd":
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        url: currentUrl,
        name: "ADHD Testing Los Angeles | Expert ADHD Evaluations | BrainWorkup",
        description:
          "Comprehensive ADHD testing in Los Angeles by Dr. Joey Trampush. Gold-standard assessments for children and adults. Marina Del Rey location serving all of LA.",
        mainEntity: {
          "@type": "MedicalCondition",
          name: "Attention Deficit Hyperactivity Disorder",
          alternateName: "ADHD",
          code: {
            "@type": "MedicalCode",
            code: "F90",
            codingSystem: "ICD-10",
          },
        },
      };
      break;

    case "adhd-in-girls":
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        url: currentUrl,
        name: "ADHD in Girls Los Angeles | Female ADHD Testing | BrainWorkup",
        description:
          "Specialized ADHD evaluations for girls and women in Los Angeles. Dr. Trampush recognizes unique female ADHD presentations often missed in standard testing.",
        mainEntity: {
          "@type": "MedicalCondition",
          name: "ADHD in Females",
          description:
            "Attention Deficit Hyperactivity Disorder presenting in girls and women",
        },
      };
      break;

    case "adult-onset-adhd":
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        url: currentUrl,
        name: "Adult ADHD Testing Los Angeles | Adult-Onset ADHD Evaluation",
        description:
          "Expert adult ADHD testing in Los Angeles. Comprehensive evaluations for executives and professionals struggling with attention, focus, and organization.",
        mainEntity: {
          "@type": "MedicalCondition",
          name: "Adult ADHD",
          alternateName: "Adult-Onset Attention Deficit Hyperactivity Disorder",
        },
      };
      break;

    case "joey-trampush":
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: currentUrl,
        mainEntity: {
          "@type": "Person",
          "@id": "https://brainworkup.org/#drtrampush",
          name: "Joey W. Trampush, PhD",
          honorificPrefix: "Dr.",
          honorificSuffix: "PhD",
          jobTitle: "Clinical Neuropsychologist",
          description:
            "Dr. Joey Trampush is a leading neuropsychologist in Los Angeles specializing in ADHD, autism, and learning disability evaluations.",
          image: "https://brainworkup.org/joey-trampush/joey-trampush.jpg",
          workLocation: {
            "@type": "Place",
            name: "Marina Del Rey, Los Angeles",
          },
        },
      };
      break;

    case "services":
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        url: currentUrl,
        name: "Neuropsychological Services Los Angeles | Testing & Evaluations",
        description:
          "Comprehensive neuropsychological services in Los Angeles including ADHD testing, autism assessments, learning disability evaluations, and forensic neuropsychology.",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "MedicalProcedure",
              name: "ADHD Testing & Evaluation",
              url: "https://brainworkup.org/adhd/",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "MedicalProcedure",
              name: "Autism Spectrum Assessment",
              url: "https://brainworkup.org/autism/",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "MedicalProcedure",
              name: "Learning Disability Testing",
              url: "https://brainworkup.org/dyslexia/",
            },
          },
        ],
      };
      break;

    case "contact":
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: currentUrl,
        name: "Contact BrainWorkup | Los Angeles Neuropsychologist",
        description:
          "Contact Dr. Joey Trampush for neuropsychological testing in Los Angeles. Call (213) 495-1155 or email info@brainworkup.org. Marina Del Rey location.",
        mainEntity: {
          "@type": "ContactPoint",
          telephone: "+1-213-495-1155",
          contactType: "customer service",
          areaServed: ["Los Angeles", "Southern California"],
          availableLanguage: "English",
        },
      };
      break;

    case "faq":
      // We'll add FAQ schema in a separate update
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        url: currentUrl,
        name: "FAQ | Neuropsychological Testing Los Angeles",
        description:
          "Frequently asked questions about neuropsychological testing, ADHD evaluations, and our services in Los Angeles.",
      };
      break;

    default:
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        url: currentUrl,
        name: document.title || "BrainWorkup Neuropsychology Los Angeles",
        isPartOf: {
          "@id": "https://brainworkup.org/#website",
        },
      };
  }

  // Website schema
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://brainworkup.org/#website",
    url: "https://brainworkup.org/",
    name: "BrainWorkup Neuropsychology",
    description: "Los Angeles neuropsychological testing and ADHD evaluations",
    publisher: {
      "@id": "https://brainworkup.org/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://brainworkup.org/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Breadcrumb schema for navigation
  let breadcrumbData = null;
  if (pathSegments.length > 0) {
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://brainworkup.org/",
      },
    ];

    pathSegments.forEach((segment, index) => {
      const url =
        "https://brainworkup.org/" +
        pathSegments.slice(0, index + 1).join("/") +
        "/";
      const name = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      breadcrumbItems.push({
        "@type": "ListItem",
        position: index + 2,
        name: name,
        item: url,
      });
    });

    breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    };
  }

  // Function to inject structured data
  function injectStructuredData(data) {
    if (!data) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Inject all structured data
  injectStructuredData(organizationData);
  injectStructuredData(websiteData);
  injectStructuredData(pageSpecificData);
  if (breadcrumbData) injectStructuredData(breadcrumbData);

  // Performance: Preload key resources
  const preloadResources = [
    { href: "/styles.min.css", as: "style" },
    { href: "/logo.webp", as: "image" },
    {
      href: "https://fonts.googleapis.com",
      as: "preconnect",
      crossorigin: true,
    },
  ];

  preloadResources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = resource.as === "preconnect" ? "preconnect" : "preload";
    link.href = resource.href;
    link.as = resource.as;
    if (resource.crossorigin) link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
});
