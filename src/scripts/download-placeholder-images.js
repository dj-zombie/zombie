// This script downloads placeholder images for the Instagram feed
// Run with: node src/scripts/download-placeholder-images.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const PLACEHOLDER_URLS = [
  'https://picsum.photos/800/800?random=1',
  'https://picsum.photos/800/800?random=2',
  'https://picsum.photos/800/800?random=3',
  'https://picsum.photos/800/800?random=4',
  'https://picsum.photos/800/800?random=5',
  'https://picsum.photos/800/800?random=6',
];

const TARGET_DIR = path.join(__dirname, '../../public/images/instagram');

// Create directory if it doesn't exist
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  console.log(`Created directory: ${TARGET_DIR}`);
}

// Download function
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(TARGET_DIR, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file if there's an error
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
}

// Main function to download all images
async function downloadAllImages() {
  console.log('Starting to download placeholder images...');
  
  try {
    const promises = PLACEHOLDER_URLS.map((url, index) => {
      const filename = `post${index + 1}.jpg`;
      return downloadImage(url, filename);
    });
    
    await Promise.all(promises);
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

// Run the download
downloadAllImages();
