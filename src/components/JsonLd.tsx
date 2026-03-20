import React from 'react';

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Rota Ativa",
    "url": "https://rotaativa.pt",
    "logo": "https://rotaativa.pt/logo.png",
    "image": "https://rotaativa.pt/images/hero.png",
    "description": "Serviço personalizado e atendimento individualizado na mediação imobiliária em Portugal. Focamos na sua necessidade com um serviço de mediação sob medida.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PT",
    },
    "areaServed": "Portugal",
    "telephone": "+351 900 000 000",
    "priceRange": "$$$",
    "sameAs": [
      "https://www.instagram.com/rotaativa.pt/",
      "https://www.youtube.com/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
