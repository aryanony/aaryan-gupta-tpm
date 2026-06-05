const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const distDir = path.join(__dirname, 'dist');
const assetsDir = path.join(__dirname, 'assets');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Load config
const configPath = path.join(dataDir, 'config.json');
let config = {};
if (fs.existsSync(configPath)) {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
}

// Flatten config for template injection
const flatConfig = {
  SITE_DOMAIN: config.site?.domain || '',
  SITE_URL: config.site?.url || '',
  SITE_TITLE: (config.person?.name || '') + ' — ' + (config.person?.title || ''),
  SITE_DESCRIPTION: config.site?.description || '',
  SITE_LANGUAGE: config.site?.language || 'en',
  SITE_LOCALE: config.site?.locale || 'en_US',
  PERSON_NAME: config.person?.name || '',
  PERSON_TITLE: config.person?.title || '',
  PERSON_EMAIL: config.person?.email || '',
  PERSON_PHONE: config.person?.phone || '',
  PERSON_HANDLE: config.person?.handle || '',
  META_OG_IMAGE: config.meta?.ogImage || '',
  META_TWITTER_CARD: config.meta?.twitterCard || '',
  META_THEME_COLOR: config.meta?.themeColor || '',
  META_TILE_COLOR: config.meta?.tileColor || '',
  SOCIAL_LINKEDIN: config.social?.linkedin || '',
  SOCIAL_GITHUB: config.social?.github || '',
  SOCIAL_TWITTER: config.social?.twitter || '',
  SCHEMA_PERSON: fs.readFileSync(path.join(__dirname, 'schema', 'person.json'), 'utf8') || '{}',
  SCHEMA_WEBSITE: fs.readFileSync(path.join(__dirname, 'schema', 'website.json'), 'utf8') || '{}',
  SCHEMA_LOCALBUSINESS: fs.readFileSync(path.join(__dirname, 'schema', 'localbusiness.json'), 'utf8') || '{}',
  SCHEMA_FAQPAGE: fs.readFileSync(path.join(__dirname, 'schema', 'faqpage.json'), 'utf8') || '{}',
};

// Inline CSS
let criticalCss = '';
try {
  criticalCss = fs.readFileSync(path.join(assetsDir, 'css', 'critical.css'), 'utf8');
} catch (e) {
  console.log('No critical.css found.');
}
flatConfig.CRITICAL_CSS = criticalCss;

// Template replacer
function inject(template, data) {
  var result = template;
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var placeholder = '{{' + key + '}}';
      while (result.indexOf(placeholder) !== -1) {
        result = result.replace(placeholder, data[key]);
      }
    }
  }
  return result;
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, {recursive: true});
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else if (exists) {
    fs.copyFileSync(src, dest);
  }
}

const pages = [
  'index.html',
  'about.html',
  'services.html',
  'work.html',
  'contact.html',
  'jaipur.html',
  'ahmedabad.html',
  'for-doctors.html',
  'products.html',
  'blog/index.html',
  'blog/technical-pm-healthtech.html'
];
pages.forEach(page => {
  const srcPath = path.join(__dirname, page);
  if (fs.existsSync(srcPath)) {
    let content = fs.readFileSync(srcPath, 'utf8');
    content = inject(content, flatConfig);
    const destPath = path.join(distDir, page);
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.writeFileSync(destPath, content);
    console.log('Built ' + page);
  }
});

// Copy assets, seo files, data
console.log('Copying assets...');
copyRecursiveSync(path.join(__dirname, 'assets'), path.join(distDir, 'assets'));
copyRecursiveSync(path.join(__dirname, 'data'), path.join(distDir, 'data'));

const seoFiles = ['robots.txt', 'manifest.json', 'browserconfig.xml', 'sitemap.xml'];
seoFiles.forEach(file => {
  const src = path.join(__dirname, 'seo', file);
  if (fs.existsSync(src)) {
    // Copy to root of dist
    fs.copyFileSync(src, path.join(distDir, file));
    // Also copy to dist/seo/ for /seo/ path references
    const seoDistDir = path.join(distDir, 'seo');
    if (!fs.existsSync(seoDistDir)) fs.mkdirSync(seoDistDir, { recursive: true });
    fs.copyFileSync(src, path.join(seoDistDir, file));
  }
});

console.log('Build completed!');
