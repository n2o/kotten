"""Bilder für einen Baufortschritt-Post vorbereiten.

Vorschau (lange Seite 1200px, für Sichtprüfung auf Gesichter):
  uv run -q --with pillow python -I bilder.py preview <quellordner> <vorschauordner>

Verarbeiten (Reihenfolge = Galerie-Reihenfolge, Boxen in Vorschau-Koordinaten):
  uv run -q --with pillow python -I bilder.py process <quellordner> <zielordner> <prüfordner> \
      haus.jpeg "dach.jpeg:240,640,305,705" "hof.jpeg:105,315,165,375;543,447,597,500"

Ergebnis: 01.webp, 02.webp, … (max. 2000px, WebP q80, ohne Metadaten) plus
.webp.json-Sidecar je Bild; Ausschnitte jeder verpixelten Box landen im Prüfordner.
"""

import json
import os
import sys
from datetime import datetime, timezone

from PIL import Image, ImageOps

PREVIEW = 1200
SIDECAR = "Origin: Vereinsfoto vom Arbeitseinsatz am Diederichskotten; Gesichter verpixelt, Metadaten entfernt, auf 2000px skaliert, WebP q80."


def load(path):
    return ImageOps.exif_transpose(Image.open(path)).convert("RGB")


def preview(src, out):
    os.makedirs(out, exist_ok=True)
    for name in sorted(os.listdir(src)):
        if name.startswith("."):
            continue
        im = load(os.path.join(src, name))
        print(name, im.size)
        im.thumbnail((PREVIEW, PREVIEW))
        im.save(os.path.join(out, os.path.splitext(name)[0] + ".jpg"), quality=80)


def process(src, out, chk, specs):
    os.makedirs(out, exist_ok=True)
    os.makedirs(chk, exist_ok=True)
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    for i, spec in enumerate(specs, 1):
        name, _, boxes = spec.partition(":")
        im = load(os.path.join(src, name))
        k = max(im.size) / PREVIEW
        for j, box in enumerate(filter(None, boxes.split(";"))):
            x0, y0, x1, y1 = (round(int(v) * k) for v in box.split(","))
            reg = im.crop((x0, y0, x1, y1))
            small = (max(1, reg.width // 12), max(1, reg.height // 12))
            im.paste(reg.resize(small, Image.BILINEAR).resize(reg.size, Image.NEAREST), (x0, y0))
            pad = round(80 * k)
            im.crop((x0 - pad, y0 - pad, x1 + pad, y1 + pad)).save(os.path.join(chk, f"{i:02d}_{j}.jpg"))
        im.thumbnail((2000, 2000), Image.LANCZOS)
        im.save(os.path.join(out, f"{i:02d}.webp"), "WEBP", quality=80)
        with open(os.path.join(out, f"{i:02d}.webp.json"), "w") as f:
            json.dump({"prompt": SIDECAR, "createdAt": now}, f, ensure_ascii=False, indent=2)
        print(f"{i:02d}.webp", name, im.size)


if __name__ == "__main__":
    cmd, *args = sys.argv[1:]
    if cmd == "preview":
        preview(*args)
    else:
        process(args[0], args[1], args[2], args[3:])
