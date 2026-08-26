import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const dir = path.join(process.cwd(), 'public', 'gallery');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

const hashes = new Set();
let duplicatesRemoved = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  const buffer = fs.readFileSync(filePath);
  const hash = crypto.createHash('md5').update(buffer).digest('hex');
  
  if (hashes.has(hash)) {
    fs.unlinkSync(filePath);
    duplicatesRemoved++;
    console.log('Removed duplicate:', file);
  } else {
    hashes.add(hash);
  }
}

console.log(`Deduplication complete. Removed ${duplicatesRemoved} duplicates. Unique images remaining: ${hashes.size}`);
