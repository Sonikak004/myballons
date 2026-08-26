import fs from 'fs';
import path from 'path';

const images = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wedding_reception_table_setting.jpg/800px-Wedding_reception_table_setting.jpg', name: 'event1.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Party_Balloons.jpg/800px-Party_Balloons.jpg', name: 'event2.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Banquet_hall.jpg/800px-Banquet_hall.jpg', name: 'event3.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Birthday_cake.jpg/800px-Birthday_cake.jpg', name: 'event4.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Floral_decorations.jpg/800px-Floral_decorations.jpg', name: 'event5.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wedding_mandap.jpg/800px-Wedding_mandap.jpg', name: 'event6.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stage_decoration.jpg/800px-Stage_decoration.jpg', name: 'event7.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wedding_reception_table_setting.jpg/800px-Wedding_reception_table_setting.jpg', name: 'event8.jpg' }, // fallback
];

async function download() {
  const dir = path.join(process.cwd(), 'public', 'gallery');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const img of images) {
    try {
      console.log('Downloading', img.name, 'from', img.url);
      const res = await fetch(img.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(path.join(dir, img.name), Buffer.from(buffer));
      console.log('Saved', img.name);
    } catch (e) {
      console.error('Failed to download', img.name, e);
      // create a fallback blank pink image if download fails
      fs.writeFileSync(path.join(dir, img.name), '');
    }
  }
}

download();
