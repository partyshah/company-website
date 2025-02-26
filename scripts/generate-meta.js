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

// Read the template HTML file
const template = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf8');

// Create the build directory if it doesn't exist
const buildDir = path.join(__dirname, '../build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// Generate HTML files for each route
Object.entries(teams).forEach(([route, data]) => {
  const html = template
    .replace(/%OG_TITLE%/g, data.title)
    .replace(/%OG_DESCRIPTION%/g, data.description)
    .replace(/%OG_IMAGE%/g, data.image)
    .replace(/%OG_URL%/g, `https://www.piketeams.com${route}`);

  const outputPath = path.join(buildDir, route === '/' ? 'index.html' : `${route.slice(1)}.html`);
  fs.writeFileSync(outputPath, html);
}); 