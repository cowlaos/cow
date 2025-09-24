import { Metadata } from 'next';

export const siteConfig = {
  name: "Furbom",
  title: "Furbom - ງົວງົນ | Professional Portfolio & Development Services",
  description: "Furbom.com - ງົວງົນ professional portfolio showcasing innovative projects, technical skills, and development expertise. Discover quality web development and digital solutions.",
  url: "https://furbom.com",
  keywords: [
    "furbom",
    "furbom.com", 
    "ງົວງົນ",
    "web development",
    "portfolio",
    "software engineer",
    "developer",
    "programming",
    "technology",
    "full stack developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "javascript developer",
    "frontend developer",
    "backend developer",
    "ui/ux developer",
    "mobile app development",
    "web design",
    "digital solutions"
  ],
  author: "Furbom",
  creator: "Furbom",
  ogImage: "/cow-1.png",
  links: {
    github: "https://github.com/cowlaos",
    linkedin: "https://linkedin.com/in/furbom",
    email: "contact@furbom.com"
  }
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  noIndex?: boolean
): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@furbom",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Schema.org structured data
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Furbom",
  "alternateName": "ງົວງົນ",
  "url": "https://furbom.com",
  "image": "https://furbom.com/cow-1.png",
  "sameAs": [
    "https://github.com/cowlaos",
    "https://linkedin.com/in/furbom"
  ],
  "jobTitle": "Software Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Furbom"
  },
  "knowsAbout": [
    "Web Development",
    "Software Engineering", 
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Full Stack Development"
  ],
  "description": "Professional software developer specializing in web development and digital solutions"
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Furbom",
  "alternateName": "ງົວງົນ",
  "url": "https://furbom.com",
  "description": "Professional portfolio showcasing innovative projects, technical skills, and development expertise",
  "publisher": {
    "@type": "Person",
    "name": "Furbom"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://furbom.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};