from PIL import Image, ImageDraw, ImageFont

# ---------- icon-192.png ----------
size = 192
img = Image.new("RGBA", (size, size), (5, 8, 22, 255))
draw = ImageDraw.Draw(img)

for y in range(size):
    ratio = y / size
    r = int(0 + (37 - 0) * ratio)
    g = int(229 + (99 - 229) * ratio)
    b = int(255 + (235 - 255) * ratio)
    draw.line((0, y, size, y), fill=(r, g, b, 255))

overlay = Image.new("RGBA", (size, size), (5, 8, 22, 180))
img = Image.alpha_composite(img, overlay)
draw = ImageDraw.Draw(img)

draw.rounded_rectangle((18, 18, 174, 174), radius=44, outline=(255, 255, 255, 220), width=6)
draw.rounded_rectangle((30, 30, 162, 162), radius=38, outline=(0, 229, 255, 180), width=5)
draw.rectangle((74, 68, 118, 82), fill=(255, 255, 255, 255))
draw.rectangle((88, 68, 104, 132), fill=(255, 255, 255, 255))

img.save("public/icons/icon-192.png")

# ---------- icon-512.png ----------
size = 512
img = Image.new("RGBA", (size, size), (5, 8, 22, 255))
draw = ImageDraw.Draw(img)

for y in range(size):
    ratio = y / size
    r = int(0 + (37 - 0) * ratio)
    g = int(229 + (99 - 229) * ratio)
    b = int(255 + (235 - 255) * ratio)
    draw.line((0, y, size, y), fill=(r, g, b, 255))

overlay = Image.new("RGBA", (size, size), (5, 8, 22, 180))
img = Image.alpha_composite(img, overlay)
draw = ImageDraw.Draw(img)

draw.rounded_rectangle((42, 42, 470, 470), radius=118, outline=(255, 255, 255, 230), width=14)
draw.rounded_rectangle((70, 70, 442, 442), radius=100, outline=(0, 229, 255, 180), width=12)
draw.rectangle((202, 178, 312, 210), fill=(255, 255, 255, 255))
draw.rectangle((242, 178, 270, 334), fill=(255, 255, 255, 255))

img.save("public/icons/icon-512.png")

# ---------- og-home.png ----------
w, h = 1200, 630
img = Image.new("RGBA", (w, h), (5, 8, 22, 255))
draw = ImageDraw.Draw(img)

for y in range(h):
    ratio = y / h
    r = int(5 + (10 - 5) * ratio)
    g = int(8 + (16 - 8) * ratio)
    b = int(22 + (40 - 22) * ratio)
    draw.line((0, y, w, y), fill=(r, g, b, 255))

draw.ellipse((70, 60, 520, 510), fill=(0, 229, 255, 40))
draw.ellipse((760, 120, 1140, 500), fill=(37, 99, 235, 38))
draw.rounded_rectangle((40, 40, w - 40, h - 40), radius=42, outline=(255, 255, 255, 70), width=4)

draw.rounded_rectangle((90, 110, 440, 170), radius=28, fill=(255, 255, 255, 15))
draw.rounded_rectangle((90, 200, 870, 380), radius=36, fill=(255, 255, 255, 12))
draw.rounded_rectangle((90, 430, 720, 500), radius=26, fill=(0, 229, 255, 24))

draw.rounded_rectangle((930, 120, 1080, 270), radius=40, outline=(0, 229, 255, 180), width=6)
draw.rounded_rectangle((960, 150, 1050, 240), radius=28, outline=(255, 255, 255, 150), width=5)

try:
    font1 = ImageFont.truetype("DejaVuSans-Bold.ttf", 72)
    font2 = ImageFont.truetype("DejaVuSans.ttf", 34)
    font3 = ImageFont.truetype("DejaVuSans.ttf", 26)
except:
    font1 = ImageFont.load_default()
    font2 = ImageFont.load_default()
    font3 = ImageFont.load_default()

draw.text((120, 118), "YSP Techwiser", fill=(255, 255, 255, 255), font=font2)
draw.text((120, 205), "Premium Tech Media", fill=(255, 255, 255, 255), font=font1)
draw.text((120, 318), "Reviews • Comparisons • AI • Videos • Collaborations", fill=(200, 220, 255, 255), font=font3)
draw.text((120, 444), "Smartphone and laptop stories with a cinematic premium look.", fill=(255, 255, 255, 220), font=font2)

img.save("public/og/og-home.png")

print("Brand assets created successfully.")
