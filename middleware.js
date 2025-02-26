import { NextResponse } from '@vercel/edge';

export const config = {
  matcher: [
    '/',
    '/gamedevteam',
    '/creativecoding',
    '/aiteam',
    '/nlpteam'
  ]
};

const teams = {
  '/gamedevteam': {
    title: 'Game Development Team | Pike Teams',
    description: 'Join a 15 person team of experienced high school computer science students, get coached by an engineer from Blizzard, and build your own video game to win the end of season competition.',
    image: 'https://www.piketeams.com/og-images/gamedev-og.png'
  },
  '/creativecoding': {
    title: 'Creative Coding Team | Pike Teams',
    description: 'Join a 15 person team of experienced high school computer science students, get coached by an engineer from Atlassian, and build creative and artistic software to win the end of season competition.',
    image: 'https://www.piketeams.com/og-images/creativecoding-og.png'
  },
  '/aiteam': {
    title: 'Artificial Intelligence Team | Pike Teams',
    description: 'Join a 15 person team of experienced high school computer science students, get coached by a former Amazon engineer, and build advanced AI systems to win the end of season competition.',
    image: 'https://www.piketeams.com/og-images/ai-og.png'
  },
  '/nlpteam': {
    title: 'Natural Language Processing Team | Pike Teams',
    description: 'Join a 15 person team of experienced high school computer science students, get coached by a Google engineer, and build advanced language AI systems to win the end of season competition.',
    image: 'https://www.piketeams.com/og-images/nlp-og.png'
  }
};

export default function middleware(request) {
  // Get the pathname from the URL
  const url = new URL(request.url);
  const path = url.pathname;

  // Get the HTML content from the request
  const response = NextResponse.next();

  // If it's a team page, use team-specific meta tags
  const teamData = teams[path];
  if (teamData) {
    const response = new NextResponse(
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <link rel="icon" href="/logo.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          
          <!-- Open Graph / Facebook -->
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.piketeams.com${path}" />
          <meta property="og:title" content="${teamData.title}" />
          <meta property="og:description" content="${teamData.description}" />
          <meta property="og:image" content="${teamData.image}" />

          <!-- Twitter -->
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.piketeams.com${path}" />
          <meta property="twitter:title" content="${teamData.title}" />
          <meta property="twitter:description" content="${teamData.description}" />
          <meta property="twitter:image" content="${teamData.image}" />

          <title>${teamData.title}</title>
        </head>
        <body>
          <div id="root"></div>
          <script src="/_next/static/chunks/main.js"></script>
        </body>
      </html>`,
      {
        headers: {
          'content-type': 'text/html',
          'cache-control': 's-maxage=1, stale-while-revalidate'
        },
      }
    );
    return response;
  }

  // For the home page and other routes, use default meta tags
  return response;
} 