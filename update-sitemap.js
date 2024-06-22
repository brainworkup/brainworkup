    const fs = require('fs');
    const path = require('path');
    const sitemapPath = path.join(__dirname, '_site', 'sitemap.xml');

    fs.readFile(sitemapPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading sitemap:', err);
            return;
        }

        const updatedData = data.replace(/<lastmod>[^<]+<\/lastmod>/g, `<lastmod>${new Date().toISOString()}</lastmod>`);

        fs.writeFile(sitemapPath, updatedData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing sitemap:', err);
                return;
            }
            console.log('Sitemap updated successfully.');
        });
    });
