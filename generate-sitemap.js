const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const glob = require('glob').glob;
const fsExtra = require('fs-extra');

// Configuration
const SITE_URL = 'https://brainworkup.org';
const SITEMAP_PATH = path.join(__dirname, 'sitemap.xml');
const IGNORE_PATTERNS = [
  '**/node_modules/**',
  '**/.*',
  '**/*.md',
  '**/sitemap.xml',
  '**/404.html',
  '**/CNAME',
  '**/robots.txt',
  '**/favicon.ico',
  '**/preview.png',
  '**/netlify.toml',
  '**/package*.json',
  '**/yarn.lock',
  '**/generate-sitemap.js',
  '**/R/**',
  '**/_*',
  '**/.*/**',
];

// Define URL priorities and change frequencies
const URL_CONFIG = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/los-angeles-neuropsychologist/': { priority: 0.95, changefreq: 'weekly' },
  '/adhd/': { priority: 0.9, changefreq: 'weekly' },
  '/adhd-in-girls/': { priority: 0.9, changefreq: 'weekly' },
  '/adult-onset-adhd/': { priority: 0.9, changefreq: 'weekly' },
  '/testing-accommodations/': { priority: 0.9, changefreq: 'weekly' },
  '/joey-trampush/': { priority: 0.95, changefreq: 'monthly' },
  '/contact/': { priority: 0.95, changefreq: 'monthly' },
  '/services/': { priority: 0.8, changefreq: 'weekly' },
  '/pediatric-neuropsychology/': { priority: 0.8, changefreq: 'weekly' },
  '/adult-neuropsychology/': { priority: 0.8, changefreq: 'weekly' },
  '/forensic-neuropsychology/': { priority: 0.8, changefreq: 'weekly' },
  '/dyslexia/': { priority: 0.75, changefreq: 'weekly' },
  '/autism/': { priority: 0.75, changefreq: 'weekly' },
  '/executive-function/': { priority: 0.75, changefreq: 'weekly' },
  '/concussion/': { priority: 0.7, changefreq: 'weekly' },
  '/adolescent/': { priority: 0.7, changefreq: 'monthly' },
  '/school-age/': { priority: 0.7, changefreq: 'monthly' },
  '/preschool/': { priority: 0.7, changefreq: 'monthly' },
  '/emerging-adulthood/': { priority: 0.7, changefreq: 'monthly' },
  '/independent-medical-exam/': { priority: 0.95, changefreq: 'monthly' },
  '/mental-health-diversion/': { priority: 0.95, changefreq: 'monthly' },
  '/faq/': { priority: 0.7, changefreq: 'monthly' },
  '/conditions-treated/': { priority: 0.7, changefreq: 'monthly' },
  '/blog/': { priority: 0.6, changefreq: 'weekly' },
  '/blog/posts/2023-12-11-welcome/': { priority: 0.4, changefreq: 'yearly' },
  '/blog/posts/2023-12-13-adhd-post/': { priority: 0.4, changefreq: 'yearly' },
  '/blog/posts/2023-12-20-brain-development-tutorial/': { priority: 0.4, changefreq: 'yearly' },
  '/404/': { priority: 0.1, changefreq: 'yearly' },
};

// Image metadata for specific pages
const IMAGE_METADATA = {
  '/adhd/': [
    {
      url: 'https://brainworkup.org/adhd/adhd-black.webp',
      title: 'ADHD Testing Los Angeles',
    },
  ],
  '/adhd-in-girls/': [
    {
      url: 'https://brainworkup.org/adhd-in-girls/adhd-girls.webp',
      title: 'ADHD in Girls Los Angeles',
    },
  ],
};

async function getFileLastModified(filePath) {
  try {
    const stats = await fsExtra.stat(filePath);
    return stats.mtime;
  } catch (error) {
    console.warn(`Could not get stats for ${filePath}:`, error.message);
    return new Date(); // Default to current date if file doesn't exist or other error
  }
}

async function generateSitemap() {
  console.log('Starting sitemap generation...');

  try {
    // Find all HTML and QMD files in the project
    const files = await glob('**/*.{html,qmd}', {
      ignore: IGNORE_PATTERNS,
      nodir: true,
    });

    console.log(`Found ${files.length} files to process...`);

    // Create a sitemap stream
    const stream = new SitemapStream({
      hostname: SITE_URL,
      xmlns: {
        news: true,
        xhtml: true,
        image: true,
        video: true,
      },
    });

    // Process each file
    for (const file of files) {
      const filePath = path.join(__dirname, file);
      const lastMod = await getFileLastModified(filePath);

      // Convert file path to URL path
      let urlPath = `/${file}`
        .replace(/\\/g, '/')
        .replace(/\/index\.(qmd|html)/, '/')
        .replace(/\.(qmd|html)$/, '/');

      // Ensure trailing slash
      urlPath = urlPath.endsWith('/') ? urlPath : `${urlPath}/`;

      // Special handling for root index files
      if (urlPath === '/index/' || urlPath === '/') {
        urlPath = '/';
      }

      // Skip if we don't have config for this URL
      if (!URL_CONFIG[urlPath]) {
        console.log(`Skipping ${urlPath} - no configuration found`);
        continue;
      }

      const { priority, changefreq } = URL_CONFIG[urlPath];
      const url = `${SITE_URL}${urlPath}`.replace(/([^:])\/\//g, '$1/'); // Remove double slashes

      const urlEntry = {
        url: urlPath,
        lastmod: lastMod.toISOString(),
        changefreq,
        priority,
      };

      // Add image metadata if available
      if (IMAGE_METADATA[urlPath]) {
        urlEntry.img = IMAGE_METADATA[urlPath];
      }

      stream.write(urlEntry);
    }

    // End the stream
    stream.end();

    // Generate the sitemap XML
    const sitemap = await streamToPromise(stream);

    // Write the sitemap to file
    await fsExtra.writeFile(SITEMAP_PATH, sitemap.toString());

    console.log(`Sitemap generated successfully at ${SITEMAP_PATH}`);
    console.log(`Total URLs: ${files.length}`);

    // Create a gzipped version
    const gzip = createGzip();
    const writeStream = fsExtra.createWriteStream(`${SITEMAP_PATH}.gz`);
    const readStream = new Readable();

    readStream.push(sitemap);
    readStream.push(null);

    readStream
      .pipe(gzip)
      .pipe(writeStream)
      .on('finish', () => {
        console.log(`Gzipped sitemap created at ${SITEMAP_PATH}.gz`);
      });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the sitemap generator
generateSitemap().catch(console.error);
