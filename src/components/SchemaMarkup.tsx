export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NexaFlow AI",
    "url": "https://nexaflow360.com",
    "logo": "https://nexaflow360.com/logo.png",
    "description": "AI-powered solutions for small businesses including AI assistant setup, website development, Excel automation, and data analysis.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-323-917-1129",
      "contactType": "sales",
      "email": "info@nexaflow360.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [],
    "foundingDate": "2026"
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NexaFlow AI",
    "url": "https://nexaflow360.com",
    "telephone": "+1-323-917-1129",
    "email": "info@nexaflow360.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Harrisburg",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "priceRange": "$300-$3200",
    "areaServed": "United States",
    "serviceType": ["AI Assistant Setup", "Website Development", "Excel Automation", "Data Analysis"]
  }

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Assistant Setup",
      "description": "Professional AI assistant setup for small businesses. Get a 24/7 AI-powered assistant that handles customer inquiries, bookings, and follow-ups automatically.",
      "provider": { "@type": "Organization", "name": "NexaFlow AI" },
      "offers": { "@type": "Offer", "price": "500", "priceCurrency": "USD" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Website Development",
      "description": "Modern, responsive website design and development tailored for small businesses. Fast, SEO-optimized, and conversion-focused.",
      "provider": { "@type": "Organization", "name": "NexaFlow AI" },
      "offers": { "@type": "Offer", "price": "1200", "priceCurrency": "USD" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Excel Automation",
      "description": "Automate repetitive Excel tasks, create smart dashboards, and streamline your data workflows with custom formulas and macros.",
      "provider": { "@type": "Organization", "name": "NexaFlow AI" },
      "offers": { "@type": "Offer", "price": "300", "priceCurrency": "USD" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Data Analysis",
      "description": "Turn your data into actionable insights with professional data analysis, visualization, and reporting services.",
      "provider": { "@type": "Organization", "name": "NexaFlow AI" },
      "offers": { "@type": "Offer", "price": "500", "priceCurrency": "USD" }
    }
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is NexaFlow AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NexaFlow AI provides AI-powered solutions for small businesses including AI assistant setup, website development, Excel automation, and data analysis. We help businesses automate repetitive tasks and operate more efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "How much do NexaFlow AI services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our services range from $300 to $3,200 depending on the scope. AI Assistant Setup starts at $500, Website Development at $1,200, Excel Automation at $300, and Data Analysis at $500. Bundle packages offer savings."
        }
      },
      {
        "@type": "Question",
        "name": "What is an AI Assistant Setup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We set up a custom AI assistant for your business that works 24/7 handling customer inquiries, booking appointments, sending reminders, and following up with leads—automating the repetitive tasks that take up your time."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries does NexaFlow AI serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve over 30 industries including healthcare, home services, professional services, retail, food & beverage, education, coaching, pet services, and more. Visit our Industries page for the full list."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get set up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most projects are completed within 1-2 weeks depending on complexity. AI Assistant Setup can be done in as little as 48 hours, while website development typically takes 1-2 weeks."
        }
      }
    ]
  }

  const allSchemas = [organizationSchema, localBusinessSchema, ...serviceSchemas, faqSchema]

  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
