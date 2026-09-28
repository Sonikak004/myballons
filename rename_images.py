import os
import re

def rename_messy_files():
    folder = "public/gallery"
    files = os.listdir(folder)
    
    max_num = 0
    for f in files:
        match = re.match(r"photo-(\d+)\.(jpg|jpeg|png|webp)", f)
        if match:
            num = int(match.group(1))
            if num > max_num:
                max_num = num
                
    next_num = max_num + 1
    
    renamed_count = 0
    
    for f in files:
        if not re.match(r"photo-\d+\.(jpg|jpeg|png|webp)", f):
            old_path = os.path.join(folder, f)
            ext = os.path.splitext(f)[1].lower()
            if not ext:
                ext = '.jpg'
            
            new_name = f"photo-{next_num}{ext}"
            new_path = os.path.join(folder, new_name)
            
            os.rename(old_path, new_path)
            print(f"Renamed to: {new_name}")
            next_num += 1
            renamed_count += 1
            
    print(f"Total files renamed: {renamed_count}")

if __name__ == "__main__":
    rename_messy_files()
