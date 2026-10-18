---
name: neuer-post
description: Neuen Baufortschritt-Eintrag für den Diederichskotten anlegen – aus einem Ordner mit Fotos eines Arbeitseinsatzes. Verwenden, wenn der Nutzer Bilder in einem Datumsordner ablegt und einen Post, Eintrag oder Beitrag auf der Seite möchte.
---

# Neuer Baufortschritt-Post

Einträge leben in `src/content/baufortschritt.tsx` (Array `posts`, wird nach Datum sortiert).
Bilder liegen unter `src/images/<jahr>/<YYYY-MM-DD>_<slug>/01.webp …`.

## Ablauf

1. **Vorschau erzeugen** (Originale meist im Repo-Root, z. B. `2026-10-17/`):
   ```sh
   uv run -q --with pillow python -I .claude/skills/neuer-post/bilder.py preview <quelle> <scratchpad>/prev
   ```
   Ausgabe zeigt Größe; Aufnahmedatum ggf. aus EXIF.

2. **Alle Vorschauen ansehen** (Read). Notieren: Motiv, sichtbare Personen, Gesichter
   (auch Profil, klein im Hintergrund – im Zweifel verpixeln). Automatische Gesichtserkennung
   funktioniert hier nicht (OpenCV 5 ohne Haar-Cascades) – Sichtprüfung ist der Weg.

3. **Genau 3 Fragen an den Nutzer stellen** (AskUserQuestion), bevor Text entsteht. Nicht aus
   Bildern raten, was gemacht wurde – Dinge auf Fotos können älter sein (z. B. die Plane an der
   Rückseite hängt schon lange). Beispiele, an die Bilder anpassen:
   - Was wurde an dem Tag konkret gemacht?
   - Gibt es einen Anlass/Hintergrund (Wetter, Förderung, Spende, Meilenstein)?
   - Was steht als Nächstes an bzw. soll erwähnt/bedankt werden?

4. **Bilder verarbeiten** – Reihenfolge der Argumente = Galerie-Reihenfolge, Gesichtsboxen in
   Vorschau-Koordinaten (`x0,y0,x1,y1`, mehrere mit `;`), großzügig um den Kopf:
   ```sh
   uv run -q --with pillow python -I .claude/skills/neuer-post/bilder.py process \
     <quelle> src/images/<jahr>/<datum>_<slug> <scratchpad>/check \
     a.jpeg "b.jpeg:240,640,305,705" ...
   ```
   Danach die Ausschnitte in `<scratchpad>/check` ansehen. Ausschnitte sind kumulativ – eine
   spätere Box im selben Bild ist im früheren Ausschnitt evtl. noch unverpixelt. Nachbessern,
   bis jedes Gesicht unkenntlich ist.

5. **Eintrag schreiben** nach dem Muster der bestehenden Posts:
   - Imports `okt2601 from "@/images/…/01.webp"` (Kürzel: Monat + Jahr + Nummer).
   - `GalleryImage[]`-Konstanten oberhalb von `posts`, je Bild `alt` (beschreibend, nur was
     sichtbar ist) und kurze `caption`.
   - Post mit `id` (`<datum>-<slug>`), `date`, `title`, `teaser` (ein Satz), `cover` (bis zu
     3 Bilder), `content` mit `<p>`, optional `<h4>`-Abschnitten und `<Gallery images={…} />`.
   - Nur behaupten, was der Nutzer bestätigt hat. Ton: sachlich-freundlich, „wir“.

6. **Prüfen:**
   ```sh
   bunx prettier --write src/content/baufortschritt.tsx
   ./node_modules/.bin/tsc --noEmit -p . && ./node_modules/.bin/eslint src/content/baufortschritt.tsx
   ```

7. Nach Bestätigung: Originalordner löschen (nicht committen), committen falls gewünscht.
