import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

const MetaTags = ({ 
  title, 
  description, 
  image, 
  url = window.location.href 
}) => {
  const [metaData, setMetaData] = useState({
    title: title,
    description: description,
    image: image,
    url: url
  });

  useEffect(() => {
    // Get meta data from headers if available
    const ogTitle = document.querySelector('meta[name="x-og-title"]')?.content;
    const ogDescription = document.querySelector('meta[name="x-og-description"]')?.content;
    const ogImage = document.querySelector('meta[name="x-og-image"]')?.content;

    if (ogTitle || ogDescription || ogImage) {
      setMetaData({
        title: ogTitle || title,
        description: ogDescription || description,
        image: ogImage || image,
        url
      });
    }
  }, [title, description, image, url]);

  return (
    <Helmet>
      {/* Standard meta tags */}
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />

      {/* Open Graph meta tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaData.url} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.image} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaData.url} />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />
    </Helmet>
  );
};

export default MetaTags; 