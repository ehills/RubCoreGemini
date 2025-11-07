import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  imageUrl?: string;
  schema?: object;
}

// Helper to set meta tags
const setMeta = (attr: 'name' | 'property', value: string, content: string) => {
  const attribute = `${attr}='${value}'`;
  let element = document.querySelector(`meta[${attribute}]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, value);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

// Helper for JSON-LD script
const setJsonLd = (schema: object) => {
  let element = document.querySelector('script[type="application/ld+json"]');
  if (!element) {
    element = document.createElement('script');
    element.setAttribute('type', 'application/ld+json');
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(schema, null, 2);
};

// Helper to remove JSON-LD script
const removeJsonLd = () => {
  const element = document.querySelector('script[type="application/ld+json"]');
  if (element) {
    element.remove();
  }
};

const Seo: React.FC<SeoProps> = ({ title, description, imageUrl, schema }) => {
  useEffect(() => {
    // Set title
    document.title = title;
    
    // Set standard meta tags
    setMeta('name', 'description', description);

    // Set Open Graph tags for social media previews
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', window.location.href); 
    if (imageUrl) {
      setMeta('property', 'og:image', imageUrl);
    }
    
    // Set Twitter Card tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (imageUrl) {
      setMeta('name', 'twitter:image', imageUrl);
    }

    // Set JSON-LD schema for rich snippets
    if (schema) {
      setJsonLd(schema);
    } else {
      removeJsonLd();
    }
    
    // Cleanup function to remove schema on component unmount
    return () => {
      removeJsonLd();
    };

  }, [title, description, imageUrl, schema]);

  return null; // This component does not render any visible UI
};

export default Seo;
