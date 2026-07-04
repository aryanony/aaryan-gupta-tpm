const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { minify } = require('html-minifier-terser');

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

// Inline CSS (Critical)
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

// ------------------------------------------------------------------
// BUNDLE & MINIFY ASSETS (JS/CSS)
// ------------------------------------------------------------------
console.log('Bundling and minifying JS and CSS...');

const jsFiles = [
  'config.js', 'app.js', 'theme.js', 'cursor.js', 'loader.js', 'scroll.js', 
  'animations.js', 'tilt.js', 'typewriter.js', 'counter.js', 'timeline.js', 
  'opd-simulator.js', 'faq.js', 'form.js', 'marquee.js', 'particles.js', 
  'magnetic.js', 'storage.js', 'cookies.js', 'pwa.js', 'interactive.js', 'reveal.js'
];
const cssFiles = ['dark.css', 'light.css', 'main.css', 'animations.css', 'reveal.css'];

let jsContent = '';
jsFiles.forEach(f => {
  jsContent += fs.readFileSync(path.join(assetsDir, 'js', f), 'utf8') + '\n';
});

let cssContent = '';
cssFiles.forEach(f => {
  cssContent += fs.readFileSync(path.join(assetsDir, 'css', f), 'utf8') + '\n';
});

const distJsDir = path.join(distDir, 'assets', 'js');
const distCssDir = path.join(distDir, 'assets', 'css');
if (!fs.existsSync(distJsDir)) fs.mkdirSync(distJsDir, { recursive: true });
if (!fs.existsSync(distCssDir)) fs.mkdirSync(distCssDir, { recursive: true });

// Compile JS
const jsResult = esbuild.transformSync(jsContent, { minify: true, loader: 'js' });
fs.writeFileSync(path.join(distJsDir, 'bundle.min.js'), jsResult.code);

// Compile CSS
const cssResult = esbuild.transformSync(cssContent, { minify: true, loader: 'css' });
fs.writeFileSync(path.join(distCssDir, 'bundle.min.css'), cssResult.code);

// ------------------------------------------------------------------
// BUILD PAGES
// ------------------------------------------------------------------
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

async function buildPages() {
  for (const page of pages) {
    const srcPath = path.join(__dirname, page);
    if (fs.existsSync(srcPath)) {
      let content = fs.readFileSync(srcPath, 'utf8');
      content = inject(content, flatConfig);
      
      // Minify HTML
      try {
        content = await minify(content, {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true
        });
      } catch (err) {
        console.error(`Error minifying ${page}:`, err);
      }

      const destPath = path.join(distDir, page);
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destPath, content);
      console.log('Built and minified ' + page);
    }
  }
}

// ------------------------------------------------------------------
// COPY OTHER ASSETS & SEO
// ------------------------------------------------------------------
async function run() {
  await buildPages();

  console.log('Copying static assets (fonts, images, icons)...');
  const assetFolders = ['fonts', 'images'];
  assetFolders.forEach(folder => {
    copyRecursiveSync(path.join(assetsDir, folder), path.join(distDir, 'assets', folder));
  });

  const seoFiles = ['robots.txt', 'manifest.json', 'browserconfig.xml', 'sitemap.xml'];
  seoFiles.forEach(file => {
    const src = path.join(__dirname, 'seo', file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(distDir, file));
      const seoDistDir = path.join(distDir, 'seo');
      if (!fs.existsSync(seoDistDir)) fs.mkdirSync(seoDistDir, { recursive: true });
      fs.copyFileSync(src, path.join(seoDistDir, file));
    }
  });

  console.log('Build completed!');
}

run();
