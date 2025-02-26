import { NextResponse } from 'next/server';

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

export default function middleware(request) {
  const url = request.nextUrl;
  const teamData = teams[url.pathname];

  // If this isn't a team page, don't modify the response
  if (!teamData) {
    return NextResponse.next();
  }

  // Get the HTML content
  const response = NextResponse.next();

  // Add team-specific meta tags
  response.headers.set('x-og-title', teamData.title);
  response.headers.set('x-og-description', teamData.description);
  response.headers.set('x-og-image', teamData.image);

  return response;
} 