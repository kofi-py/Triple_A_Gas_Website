from colorsys import rgb_to_hsv
from pathlib import Path

from PIL import Image


source = Path(r"C:\Users\user\AppData\Local\Temp\codex-clipboard-56a0bc14-4f52-4e02-a84a-a1c345c02e19.png")
destination = Path("output/imagegen/triple-a-wine-logo.png")

base = (0x5D, 0x10, 0x20)
highlight = (0x8F, 0x1E, 0x34)

image = Image.open(source).convert("RGBA")
result = Image.new("RGBA", image.size, (0, 0, 0, 0))
source_pixels = image.load()
result_pixels = result.load()

for y in range(image.height):
    for x in range(image.width):
        red, green, blue, alpha = source_pixels[x, y]
        hue, saturation, value = rgb_to_hsv(red / 255, green / 255, blue / 255)

        # Blue logo body: retain the exact source pixels and map its existing
        # light-to-dark shading to the requested wine range.
        if saturation >= 0.18 and 0.49 <= hue <= 0.62:
            shade = max(0.0, min(1.0, (value - 0.24) / 0.70))
            result_pixels[x, y] = (
                round(base[0] + (highlight[0] - base[0]) * shade),
                round(base[1] + (highlight[1] - base[1]) * shade),
                round(base[2] + (highlight[2] - base[2]) * shade),
                alpha,
            )

        # Only the inner flame becomes white; surrounding orange/gold glow
        # is deliberately excluded so the final mark has no gold tones.
        elif (
            478 <= x <= 548
            and 375 <= y <= 495
            and saturation >= 0.28
            and 0.035 <= hue <= 0.16
        ):
            result_pixels[x, y] = (255, 255, 255, alpha)

destination.parent.mkdir(parents=True, exist_ok=True)
result.save(destination)
