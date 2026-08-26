const fs = require('fs');
const file = 'src/components/PhotoGallery.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+fill\s+sizes="([^"]+)"\s+className="absolute w-full h-\[115%\] -top-\[15%\] left-0 object-cover transition-transform duration-700 group-hover:scale-105 origin-center"\s+\/>/g, 
  '<div className="absolute w-full h-[115%] -top-[15%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">\n            <Image\n              src=""\n              alt=""\n              fill\n              sizes=""\n              className="object-cover"\n            />\n          </div>'
);

fs.writeFileSync(file, content);
