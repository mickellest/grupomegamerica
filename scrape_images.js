import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://www.grupomegamerica.com/';
const outputDir = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(imgUrl, filename) {
    return new Promise((resolve, reject) => {
        https.get(imgUrl, (res) => {
            if (res.statusCode === 200) {
                const contentType = res.headers['content-type'] || '';
                let ext = 'jpg';
                if (contentType && contentType.startsWith('image/')) {
                    ext = contentType.split('/')[1] || 'jpg';
                }
                const finalFilename = `${filename}.${ext}`;
                const dest = path.join(outputDir, finalFilename);
                const fileStream = fs.createWriteStream(dest);
                res.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Downloaded: ${finalFilename}`);
                    resolve(finalFilename);
                });
            } else {
                // Some Google URLs redirect, let's just ignore for this script and hope 200 works
                resolve(null);
            }
        }).on('error', (err) => {
            console.error(`Error downloading ${imgUrl}:`, err.message);
            resolve(null);
        });
    });
}

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', async () => {
        const defaultlh3Regex = /https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_\-]+/g;
        const fallbackRegex = /https:\/\/images\.squarespace-cdn\.com\/[^"'\s\)]+/g;

        let matches = [...new Set(data.match(defaultlh3Regex) || [])];

        console.log(`Found ${matches.length} unique image URLs.`);

        if (matches.length === 0) {
            console.log('No Google content images found, attempting raw scrape.');
        }

        let cnt = 1;
        for (let urlMatch of matches) {
            // Append size param for google content
            const imgUrl = urlMatch.includes('=') ? urlMatch : urlMatch + '=w1200-h900-p';
            await downloadImage(imgUrl, `original_img_${cnt}`);
            cnt++;
        }
        console.log("Extraction attempt complete.");
    });
}).on('error', err => {
    console.log('Error: ' + err.message);
});
