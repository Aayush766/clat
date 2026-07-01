import { SITE, FAQS, COURSES } from "./site-data";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: "CH Gaya",
    description:
      "Best CLAT, AILET and CUET coaching institute in Gaya, Bihar. Expert faculty, personalised mentoring and proven results.",
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    logo: `${SITE.url}/images/career-heights-gaya-logo.png`,
    image: `${SITE.url}/images/clat-coaching-institute-gaya-career-heights.webp`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHours: SITE.hoursSchema,
    foundingDate: SITE.founded,
    founder: {
      "@type": "Person",
      name: SITE.founder,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
    },
    sameAs: [SITE.social.facebook, SITE.social.youtube, SITE.social.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coaching Programs",
      itemListElement: COURSES.map((c) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: c.name,
          description: c.description,
          provider: {
            "@type": "EducationalOrganization",
            name: SITE.name,
          },
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "CLAT Coaching Gaya",
        item: `${SITE.url}/#courses`,
      },
    ],
  };
}

export function courseSchemas() {
  return COURSES.map((c) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.name,
    description: c.description,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE.name,
      sameAs: SITE.url,
    },
  }));
}
