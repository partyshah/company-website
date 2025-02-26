export const config = {
  matcher: ['/gamedevteam', '/nlpteam', '/aiteam']
};

export default function handler(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  const teams = {
    '/gamedevteam': {
      title: 'Game Development Team | Pike Teams',
      description: 'Join our Game Development team and learn to create your own video games. Perfect for students interested in game design, programming, and interactive entertainment.',
      image: 'https://www.piketeams.com/og-images/gamedev-og.png'
    },
    '/nlpteam': {
      title: 'Natural Language Processing Team | Pike Teams',
      description: 'Join our NLP team and learn to build AI systems that understand and generate human language. Perfect for students interested in artificial intelligence and language technology.',
      image: 'https://www.piketeams.com/og-images/nlp-og.png'
    },
    '/aiteam': {
      title: 'Artificial Intelligence Team | Pike Teams',
      description: 'Join our AI team and learn to build intelligent systems, neural networks, and machine learning models. Perfect for students interested in the cutting edge of technology.',
      image: 'https://www.piketeams.com/og-images/ai-og.png'
    }
  };

  const teamData = teams[path];
  if (!teamData) {
    return new Response('Not Found', { status: 404 });
  }

  return new Response(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="${teamData.title}" />
        <meta property="og:description" content="${teamData.description}" />
        <meta property="og:image" content="${teamData.image}" />
        <meta property="og:url" content="https://www.piketeams.com${path}" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${teamData.title}" />
        <meta name="twitter:description" content="${teamData.description}" />
        <meta name="twitter:image" content="${teamData.image}" />
      </head>
      <body>
        <script>
          window.location.href = "${path}";
        </script>
      </body>
    </html>`,
    {
      headers: {
        'content-type': 'text/html',
        'cache-control': 's-maxage=1, stale-while-revalidate'
      }
    }
  );
} 