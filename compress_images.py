import os
from PIL import Image
import glob

def compress_images(directory, max_size=1080, quality=75):
    image_paths = glob.glob(os.path.join(directory, "*.jpg")) + glob.glob(os.path.join(directory, "*.png"))
    
    total_saved = 0
    for path in image_paths:
        try:
            original_size = os.path.getsize(path)
            
            with Image.open(path) as img:
                # Convert to RGB if needed (e.g., for PNGs with alpha)
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                
                # Resize if the image is too large
                if max(img.size) > max_size:
                    img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
                
                # Overwrite the original file with compression
                img.save(path, "JPEG", optimize=True, quality=quality)
                
            new_size = os.path.getsize(path)
            saved = original_size - new_size
            if saved > 0:
                total_saved += saved
                print(f"Compressed {os.path.basename(path)}: {original_size//1024}KB -> {new_size//1024}KB")
        except Exception as e:
            print(f"Error compressing {path}: {e}")
            
    print(f"\nTotal space saved: {total_saved // (1024*1024)} MB")

if __name__ == "__main__":
    compress_images("public/gallery")
