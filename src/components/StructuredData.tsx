interface OrganizationData {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    postal?: string;
    country?: string;
  };
  socialMedia?: string[];
  foundingDate?: string;
  employees?: string;
}

interface WebsiteData {
  name?: string;
  url?: string;
  description?: string;
  languages?: string[];
}

interface RealEstateData {
  name?: string;
  description?: string;
  url?: string;
  images?: string[];
  propertyType?: string;
  rooms?: string;
  size?: number;
  price?: string;
}

interface ProductData {
  name: string;
  description: string;
  images?: string[];
  category?: string;
  price?: string;
}

interface ArticleData {
  title: string;
  description: string;
  image: string;
  publishDate: string;
  modifiedDate?: string;
  url: string;
}

export interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'product' | 'realEstate';
  data: OrganizationData | WebsiteData | RealEstateData | ProductData | ArticleData;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateOrganizationData = (orgData: OrganizationData) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: orgData.name || "SkLoftLife Villas",
    url: orgData.url || "https://skloftlife-villas.com",
    logo: orgData.logo || "https://skloftlife-villas.com/images/logo.png",
    description: orgData.description || "Luxury villa construction and architecture company specializing in modern design and premium craftsmanship.",
    telephone: orgData.telephone || "+90 555 123 4567",
    email: orgData.email || "info@skloftlife.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: orgData.address?.street || "",
      addressLocality: orgData.address?.city || "Antalya",
      addressRegion: orgData.address?.region || "Antalya",
      postalCode: orgData.address?.postal || "",
      addressCountry: orgData.address?.country || "TR"
    },
    sameAs: orgData.socialMedia || [
      "https://www.instagram.com/skloftlife",
      "https://www.facebook.com/skloftlife",
      "https://www.linkedin.com/company/skloftlife"
    ],
    foundingDate: orgData.foundingDate || "2020-01-01",
    numberOfEmployees: orgData.employees || "10-50",
    industry: "Real Estate Development",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 36.8969,
        longitude: 30.7133
      },
      geoRadius: "50000"
    }
  });

  const generateWebsiteData = (websiteData: WebsiteData) => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: websiteData.name || "SkLoftLife Villas",
    url: websiteData.url || "https://skloftlife-villas.com",
    description: websiteData.description || "Explore luxury villa designs, construction progress, and architectural excellence.",
    inLanguage: websiteData.languages || ["tr", "en", "ru"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://skloftlife-villas.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  });

  const generateRealEstateData = (realEstateData: RealEstateData) => ({
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: realEstateData.name || "SkLoftLife Luxury Villas",
    description: realEstateData.description || "Premium luxury villas with modern architecture and premium amenities.",
    url: realEstateData.url || "https://skloftlife-villas.com",
    image: realEstateData.images || [
      "https://skloftlife-villas.com/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1 kopyası.jpg"
    ],
    propertyType: realEstateData.propertyType || "House",
    numberOfRooms: realEstateData.rooms || "3-5",
    floorSize: {
      "@type": "QuantitativeValue",
      value: realEstateData.size || 300,
      unitCode: "MTK"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Antalya",
      addressRegion: "Antalya",
      addressCountry: "TR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.8969,
      longitude: 30.7133
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: realEstateData.price || "Contact for pricing",
        priceCurrency: "TRY"
      }
    }
  });

  const generateProductData = (productData: ProductData) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: productData.name,
    description: productData.description,
    image: productData.images || [],
    brand: {
      "@type": "Brand",
      name: "SkLoftLife"
    },
    manufacturer: {
      "@type": "Organization",
      name: "SkLoftLife Villas"
    },
    category: productData.category || "Real Estate",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: productData.price || "Contact for pricing",
        priceCurrency: "TRY"
      }
    }
  });

  const generateArticleData = (articleData: ArticleData) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleData.title,
    description: articleData.description,
    image: articleData.image,
    author: {
      "@type": "Organization",
      name: "SkLoftLife Villas"
    },
    publisher: {
      "@type": "Organization",
      name: "SkLoftLife Villas",
      logo: {
        "@type": "ImageObject",
        url: "https://skloftlife-villas.com/images/logo.png"
      }
    },
    datePublished: articleData.publishDate,
    dateModified: articleData.modifiedDate || articleData.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleData.url
    }
  });

  let structuredData;

  switch (type) {
    case 'organization':
      structuredData = generateOrganizationData(data as OrganizationData);
      break;
    case 'website':
      structuredData = generateWebsiteData(data as WebsiteData);
      break;
    case 'realEstate':
      structuredData = generateRealEstateData(data as RealEstateData);
      break;
    case 'product':
      structuredData = generateProductData(data as ProductData);
      break;
    case 'article':
      structuredData = generateArticleData(data as ArticleData);
      break;
    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}