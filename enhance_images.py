import os
import glob
import re

def enhance_image_quality():
    files = glob.glob("src/components/*.tsx")
    
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # We want to add quality={100} to all <Image /> components if it doesn't already have it.
        # An <Image ... /> tag can span multiple lines.
        # We will use regex to find <Image ... /> and insert quality={100} before the closing />
        
        # Regex to match <Image ... />
        def replacer(match):
            tag = match.group(0)
            if 'quality=' not in tag:
                # Insert quality={100} before /> or >
                if tag.endswith('/>'):
                    return tag[:-2] + ' quality={100} />'
                elif tag.endswith('>'):
                    return tag[:-1] + ' quality={100}>'
            return tag
            
        content = re.sub(r'<Image[^>]+>', replacer, content)
        
        if content != original_content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Enhanced quality in {file}")

if __name__ == "__main__":
    enhance_image_quality()
