const { SitemapStream, streamToPromise } = require('sitemap')
const { createGzip } = require('zlib')
const { Readable } = require('stream')
const { parseString } = require('xml2js')
const fs = require('fs')

// Read the sitemap.xml file
const sitemapXml = fs.readFileSync('sitemap.xml', 'utf8')

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://brainworkup.org/' })

// Parse the sitemap.xml file
parseString(sitemapXml, (err, result) => {
  if (err) {
    console.error(err)
    return
  }

  // Add URLs to the stream
  result.urlset.url.forEach(url => {
    stream.write({ url: url.loc[0], changefreq: 'weekly', priority: 0.7 })
    stream.write({ url: url.loc[0], changefreq: 'daily', priority: 0.3 })
  })

  // End the stream
  stream.end()

  // Pipe the stream to a gzip file
  const writeStream = createGzip()
  streamToPromise(stream).then((data) => {
    const readableStream = new Readable()
    readableStream.push(data.toString())
    readableStream.push(null)
    readableStream.pipe(writeStream)
  })
})
