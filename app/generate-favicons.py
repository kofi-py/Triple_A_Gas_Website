"""Generate favicon package for Triple A Gas website."""
from PIL import Image
import os
import json

base = os.path.join(os.path.dirname(os.path.abspath(__file__)), "images")
src = os.path.join(base, "offical_logo-removebg.png")

img = Image.open(src).convert("RGBA")

ico_sizes = [(16, 16), (32, 32), (48, 48)]
ico_images = [img.resize(s, Image.LANCZOS) for s in ico_sizes]
ico_path = os.path.join(base, "favicon.ico")
ico_images[0].save(ico_path, format="ICO", sizes=ico_sizes, append_images=ico_images[1:])
print("1/6 favicon.ico")

png_sizes = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
}
for name, size in png_sizes.items():
    img.resize((size, size), Image.LANCZOS).save(os.path.join(base, name), format="PNG")
    print(f"2/6 {name}")

manifest = {
    "name": "Triple A Gas",
    "short_name": "Triple A Gas",
    "icons": [
        {"src": "android-chrome-192x192.png", "sizes": "192x192", "type": "image/png"},
        {"src": "android-chrome-512x512.png", "sizes": "512x512", "type": "image/png"},
    ],
    "theme_color": "#5D1020",
    "background_color": "#ffffff",
    "display": "standalone",
}
with open(os.path.join(base, "site.webmanifest"), "w") as f:
    json.dump(manifest, f, indent=2)
print("3/6 site.webmanifest")

img.resize((150, 150), Image.LANCZOS).save(os.path.join(base, "mstile-150x150.png"), format="PNG")
print("4/6 mstile-150x150.png")

xml = '<?xml version="1.0" encoding="utf-8"?><browserconfig><msapplication><tile><square150x150logo src="mstile-150x150.png"/><TileColor>#5D1020</TileColor></tile></msapplication></browserconfig>'
with open(os.path.join(base, "browserconfig.xml"), "w") as f:
    f.write(xml)
print("5/6 browserconfig.xml")

print("6/6 Done!")
for fname in sorted(os.listdir(base)):
    keywords = ["favicon", "apple-touch", "android-chrome", "site.webmanifest", "mstile", "browserconfig"]
    if any(k in fname for k in keywords):
        fpath = os.path.join(base, fname)
        print(f"  {fname:35s} {os.path.getsize(fpath):>8,} bytes")
