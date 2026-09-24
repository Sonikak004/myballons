import os
import shutil
import glob

public_dir = r"C:\Users\sonik\.gemini\antigravity\scratch\myballons\public"
new_assets = os.path.join(public_dir, "New images and videos")
gallery_dir = os.path.join(public_dir, "gallery")
videos_dir = os.path.join(public_dir, "videos")

# clear gallery and videos
for f in glob.glob(os.path.join(gallery_dir, "*")):
    os.remove(f)
for f in glob.glob(os.path.join(videos_dir, "*")):
    os.remove(f)

image_exts = {".jpg", ".jpeg", ".png", ".webp"}
video_exts = {".mp4", ".mov", ".webm"}

images = []
videos = []

for f in os.listdir(new_assets):
    ext = os.path.splitext(f)[1].lower()
    if ext in image_exts:
        images.append(f)
    elif ext in video_exts:
        videos.append(f)

# move and rename images
image_names = []
for i, img in enumerate(images):
    ext = os.path.splitext(img)[1].lower()
    new_name = f"photo-{i+1}{ext}"
    shutil.move(os.path.join(new_assets, img), os.path.join(gallery_dir, new_name))
    image_names.append(new_name)

# move and rename videos
video_names = []
for i, vid in enumerate(videos):
    ext = os.path.splitext(vid)[1].lower()
    new_name = f"video-{i+1}{ext}"
    shutil.move(os.path.join(new_assets, vid), os.path.join(videos_dir, new_name))
    video_names.append(new_name)

print("Images:", image_names)
print("Videos:", video_names)

# Now update the TSX files
import re

components_dir = r"C:\Users\sonik\.gemini\antigravity\scratch\myballons\src\components"

def update_file(filename, replacements):
    path = os.path.join(components_dir, filename)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    for old, new in replacements:
        content = re.sub(old, new, content)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

# update Hero.tsx
if video_names:
    update_file("Hero.tsx", [(r'/videos/video-\d+\.\w+', f'/videos/{video_names[0]}')])

# Helper to safely get image name
def get_img(index, default="photo-1.jpg"):
    return image_names[index] if index < len(image_names) else (image_names[0] if image_names else default)

# StackedEvents.tsx (needs 4 images)
se_replacements = [
    (r'/gallery/photo-12\.jpg', f'/gallery/{get_img(0)}'),
    (r'/gallery/photo-13\.jpg', f'/gallery/{get_img(1)}'),
    (r'/gallery/photo-14\.jpg', f'/gallery/{get_img(2)}'),
    (r'/gallery/photo-15\.jpg', f'/gallery/{get_img(3)}'),
]
update_file("StackedEvents.tsx", se_replacements)

# WhyChooseUs.tsx (needs 3 images)
wcu_replacements = [
    (r'/gallery/photo-13\.jpg', f'/gallery/{get_img(4)}'),
    (r'/gallery/photo-14\.jpg', f'/gallery/{get_img(5)}'),
    (r'/gallery/photo-15\.jpg', f'/gallery/{get_img(6)}'),
]
update_file("WhyChooseUs.tsx", wcu_replacements)

# PhotoGallery.tsx (needs 6 images)
pg_replacements = [
    (r'/gallery/photo-13\.jpg', f'/gallery/{get_img(7)}'),
    (r'/gallery/photo-14\.jpg', f'/gallery/{get_img(8)}'),
    (r'/gallery/photo-15\.jpg', f'/gallery/{get_img(9)}'),
    (r'/gallery/photo-16\.jpg', f'/gallery/{get_img(10)}'),
    (r'/gallery/photo-17\.jpg', f'/gallery/{get_img(11)}'),
    (r'/gallery/photo-2\.jpg', f'/gallery/{get_img(12)}'),
]
update_file("PhotoGallery.tsx", pg_replacements)

# CarouselSection.tsx (needs 5 images, duplicated)
cs_imgs = [get_img(i) for i in range(13, 18)] if len(image_names) >= 18 else [get_img(i) for i in range(5)]
cs_replacements = [
    (r'/gallery/photo-7\.jpg', f'/gallery/{cs_imgs[0]}'),
    (r'/gallery/photo-8\.jpg', f'/gallery/{cs_imgs[1]}'),
    (r'/gallery/photo-9\.jpg', f'/gallery/{cs_imgs[2]}'),
    (r'/gallery/photo-10\.jpg', f'/gallery/{cs_imgs[3]}'),
    (r'/gallery/photo-11\.jpg', f'/gallery/{cs_imgs[4]}'),
]
update_file("CarouselSection.tsx", cs_replacements)

print("Done updating components.")
