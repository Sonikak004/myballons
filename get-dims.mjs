import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'gallery');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

// we can just use sharp or standard JS to get dims, but since we don't have sharp installed, 
// let's just create a script that reads the first few bytes, but actually it's easier to just 
// list the files and I can visually assign them or just randomly assign them.
// Let's install image-size quickly to read them.
console.log(files.join(', '));
