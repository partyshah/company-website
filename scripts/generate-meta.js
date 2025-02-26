const fs = require('fs');
const path = require('path');

const teams = {
  '/': {
    title: 'Pike Teams | Computer Science Teams for High Schoolers',
    description: 'Pike Teams offers specialized computer science teams for high school students. Join us to learn programming, AI, game development, creative coding, and more.',
    image: 'https://www.piketeams.com/logo.png'
  },
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

// Read the built index.html file
const buildDir = path.join(__dirname, '../build');
const indexHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

// Generate HTML files for each route
Object.entries(teams).forEach(([route, data]) => {
  const html = indexHtml
    .replace(/<title>.*?<\/title>/, `<title>${data.title}</title>`)
    .replace(/<meta name="description".*?>/, `<meta name="description" content="${data.description}" />`)
    .replace(/<meta property="og:title".*?>/, `<meta property="og:title" content="${data.title}" />`)
    .replace(/<meta property="og:description".*?>/, `<meta property="og:description" content="${data.description}" />`)
    .replace(/<meta property="og:image".*?>/, `<meta property="og:image" content="${data.image}" />`)
    .replace(/<meta property="og:url".*?>/, `<meta property="og:url" content="https://www.piketeams.com${route}" />`)
    .replace(/<meta property="twitter:title".*?>/, `<meta property="twitter:title" content="${data.title}" />`)
    .replace(/<meta property="twitter:description".*?>/, `<meta property="twitter:description" content="${data.description}" />`)
    .replace(/<meta property="twitter:image".*?>/, `<meta property="twitter:image" content="${data.image}" />`)
    .replace(/<meta property="twitter:url".*?>/, `<meta property="twitter:url" content="https://www.piketeams.com${route}" />`);

  const outputPath = path.join(buildDir, route === '/' ? 'index.html' : `${route.slice(1)}.html`);
  fs.writeFileSync(outputPath, html);
}); 