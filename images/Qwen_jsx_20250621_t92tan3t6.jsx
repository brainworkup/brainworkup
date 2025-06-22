import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Brainworkup Neuropsychology LLC | Pediatric & Forensic Neuropsychology in Los Angeles</title>
        <meta name="description" content="Expert neuropsychological evaluations for ADHD, dyslexia, autism, executive function, and forensic assessments in Southern California. Founded by Dr. Joey Trampush, USC faculty member." />
        <meta name="keywords" content="ADHD evaluation, neuropsychological testing, pediatric neuropsychology, forensic neuropsychology, dyslexia assessment, Los Angeles" />
        <meta property="og:title" content="Brainworkup Neuropsychology LLC" />
        <meta property="og:description" content="Expert neuropsychological evaluations for ADHD, dyslexia, autism, executive function, and forensic assessments in Southern California." />
        <meta property="og:image" content="hero.webp" />
        <meta property="og:url" content="https://brainworkup.org"  />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@brainworkup" />
        <meta name="twitter:title" content="Brainworkup Neuropsychology LLC" />
        <meta name="twitter:description" content="Expert neuropsychological evaluations for ADHD, dyslexia, autism, executive function, and forensic assessments in Southern California." />
        <meta name="twitter:image" content="hero.webp" />
        <link rel="canonical" href="https://brainworkup.org"  />
      </Helmet>

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org", 
            "@type": "Organization",
            "name": "Brainworkup Neuropsychology LLC",
            "alternateName": "BrainWorkup Neuropsychology",
            "url": "https://brainworkup.org", 
            "logo": "logo.png",
            "sameAs": [
              "https://www.linkedin.com/in/joey-trampush" 
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-310-555-0123",
              "contactType": "customer service"
            }
          }
        `}
      </script>

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org", 
            "@type": "LocalBusiness",
            "name": "Brainworkup Neuropsychology LLC",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Neuropsych Drive",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90001",
              "addressCountry": "US"
            },
            "telephone": "+1-310-555-0123",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "hoursAvailable": "09:00-17:00"
            }
          }
        `}
      </script>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img 
                src="hero.webp" 
                alt="BrainWorkup Neuropsychology logo - comprehensive neuropsychological assessments in Southern California." 
                className="rounded-full w-40 h-40 md:w-56 md:h-56 mx-auto shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-12 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Neuropsychological Evaluations Across the Lifespan</h1>
              <h2 className="text-xl md:text-2xl mb-6">Southern California Pediatric & Forensic Neuropsychology Practice</h2>
              <p className="text-lg mb-6">Founded by Dr. Joey Trampush, Assistant Professor of Psychiatry and Behavioral Sciences at the Keck School of Medicine of USC</p>
              <a 
                href="#contact" 
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">About Our Practice</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Founded by Joey Trampush, PhD, BrainWorkup Neuropsychology, LLC, is a neuropsychology practice based in Southern California. We specialize in state-of-the-art neurocognitive and neurobehavioral examinations for children, adolescents, and adults. We are dedicated to understanding individual cognitive strengths and weaknesses, working collaboratively with you and your family.
            </p>
            <p className="text-lg mb-6">
              Dr. Trampush brings his expertise as an Assistant Professor of Psychiatry and Behavioral Sciences at the Keck School of Medicine of USC to every evaluation, ensuring the highest standard of care grounded in the latest scientific research.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Services Tailored for Developing Minds</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4">Comprehensive Neurocognitive Examination</h3>
              <p>Dive deep into understanding your or your child’s neurocognitive landscape and brain-based behavioral difficulties.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4">Targeted Consultation and Advice</h3>
              <p>Customized support for individuals and families, fostering optimal growth through evidence-based strategies.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4">Continued Care and Guidance</h3>
              <p>We’re here for the long haul, offering ongoing assistance to adapt to your or your child’s evolving needs.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Featured Services</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-teal-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>ADHD Evaluations for Girls and Young Women</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-teal-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Psychodiagnostic and Academic Testing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-teal-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Independent Medical Exams (IME)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-teal-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Mental Health Diversion</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-teal-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Adult-Onset ADHD Assessment</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-teal-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Learning Disability Evaluation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Data-Driven Approach</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              We use the latest data analytic and data visualization tools to help us interpret and make sense of all the neuropsychological and behavioral data you provide throughout the evaluation to understand your or your child's unique neurocognitive profile.
            </p>
            <p className="text-lg">
              We then translate these data into actionable insights to help you and your family gain novel insights about your concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Contact to Connect</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8 text-center">
              Get in touch with us to see how we can help you and your family with our clinical services.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Brainworkup Neuropsychology</h3>
              <p className="text-gray-400">Southern California's premier practice for pediatric and forensic neuropsychology evaluations.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#approach" className="text-gray-400 hover:text-white">Approach</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-400 mb-2">123 Neuropsych Drive</p>
              <p className="text-gray-400 mb-2">Los Angeles, CA 90001</p>
              <p className="text-gray-400">(310) 555-0123</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Brainworkup Neuropsychology LLC. All rights reserved.</p>
            <p className="mt-2">Website by Brainworkup Neuropsychology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;