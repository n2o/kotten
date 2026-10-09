---
name: Diederichskotten
description: Website eines Bergischen Fachwerk-Denkmals, gebaut wie das Haus selbst
colors:
  schiefer: "#22272b"
  schiefer-hell: "#3a4248"
  kalk: "#f6f6f3"
  kalk-tief: "#e9e9e4"
  lade: "#1f5a41"
  lade-tief: "#163f2e"
  lade-hauch: "#dfeae3"
  stein: "#565f66"
  border: "#c9cbc6"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 4.8vw, 5.5rem)"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 75"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 80"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 80"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  sm: "2px"
spacing:
  balken: "6px"
  balken-md: "10px"
  gefach: "20px"
  gefach-md: "24px"
  abschnitt: "64px"
  abschnitt-md: "96px"
components:
  button-primary:
    backgroundColor: "{colors.lade}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.lade-tief}"
    textColor: "#ffffff"
  button-primary-lg:
    backgroundColor: "{colors.lade}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "8px 24px"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.schiefer}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 20px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.schiefer}"
    textColor: "{colors.kalk}"
  button-inverse:
    backgroundColor: "transparent"
    textColor: "{colors.kalk}"
    rounded: "{rounded.sm}"
    size: "44px"
  button-inverse-hover:
    backgroundColor: "{colors.kalk}"
    textColor: "{colors.schiefer}"
  gefach:
    backgroundColor: "{colors.kalk}"
    textColor: "{colors.schiefer}"
    rounded: "0"
    padding: "{spacing.gefach}"
  post-header-latest:
    backgroundColor: "{colors.lade}"
    textColor: "#ffffff"
    padding: "16px 20px"
  page-header:
    backgroundColor: "{colors.schiefer}"
    textColor: "{colors.kalk}"
    padding: "40px 16px 48px"
---

# Design System: Diederichskotten

## Overview

**Creative North Star: "Das Bergische Fachwerkhaus"**

Die Seite ist gebaut wie das Haus, das sie rettet. Schieferschwarze Balken bilden das Layoutraster, kalkweiße Gefache tragen Text und Fotos, und das grüne Holz von Läden und Türen markiert, was man tun kann: spenden, weiterlesen, den neuesten Arbeitseinsatz aufrufen. Der Grund ist Kalk, die Rahmen (Navigation, Seitenkopf, Footer) sind Schiefer, und Inhalte, die zusammengehören, stehen als Gefache in einem gemeinsamen Balkenwerk statt als einzelne schwebende Karten.

Die Haltung ist bodenständig und handfest: kantige Ecken, keine Schatten, keine Verläufe, eine einzige Schriftfamilie in zwei Stimmen. Tiefe entsteht durch die Fuge zwischen Balken und Gefach, nicht durch Licht. Fotos der echten Baustelle sind der Hauptinhalt; die Gestaltung rahmt sie, wie Balken ein Gefach rahmen.

Die Signatur ist der Ständer: ein senkrechter Schieferbalken, von dem für jeden Eintrag (Arbeitseinsatz, historisches Ereignis) ein Riegel abzweigt. Der Riegel fährt beim Einblenden einmal von links ein. Der neueste Eintrag trägt das Ladengrün.

**Key Characteristics:**
- Fachwerk-Raster: Schiefer-Fugen in Balkenbreite (6px, ab 768px 10px) zwischen Kalk-Feldern.
- Dreiklang Schiefer / Kalk / Ladengrün, nur hell (kein Dark Mode).
- Archivo schmal und kräftig für Überschriften, normal für Lesetext.
- Ecken 0 bis 2px, keine Schatten auf Inhaltsflächen.
- Ständer mit Riegeln als wiederkehrende Chronik-Form.

## Colors

Ein Dreiklang aus dem Material des Hauses: Schieferbalken, Kalkputz, grün gestrichenes Holz.

### Primary
- **Ladengrün** (`lade`): Die Farbe der Türen und Läden. Ausschließlich für Aktionen (primäre Schaltfläche, Textlinks, aktiver Navigationsstrich, Fokusring) und für das Aktuelle (Kopf und Riegel des neuesten Arbeitseinsatzes, Datum des letzten Arbeitseinsatzes).
- **Ladengrün tief** (`lade-tief`): Hover-Zustand jeder grünen Aktion; Textfarbe auf Ladengrün-Hauch.
- **Ladengrün-Hauch** (`lade-hauch`): Nur Textauswahl (`::selection`) und shadcn-`accent`. Keine Flächenfarbe für Inhalte.

### Neutral
- **Schiefer** (`schiefer`): Balken und Rahmen. Navigation, Seitenkopf, Footer, Fugen im Fachwerk, Ständer und Riegel, Jahresmarke auf /baufortschritt, Fließtextfarbe auf Kalk, Hintergrund der Lightbox-Bühne. Auch `themeColor` des Browsers.
- **Schiefer hell** (`schiefer-hell`): Feine Kante zwischen Navigation und Seitenkopf, Hover im mobilen Menü.
- **Kalk** (`kalk`): Seitengrund und jedes Gefach. Textfarbe auf Schiefer (meist mit 80 bis 85 % Deckkraft für Nebentext).
- **Kalk tief** (`kalk-tief`): Platzhaltergrund unter ladenden Fotos, Ghost-Hover, shadcn-`secondary`/`muted`.
- **Stein** (`stein`): Sekundärtext auf Kalk: Daten, Bildunterschriften, Zahl-Beschriftungen, Pressetexte, Förderhinweis.
- **Linie** (`border`): Standard-Randfarbe aus shadcn; in den eigenen Komponenten kaum sichtbar, weil Ränder dort Schiefer sind.

### Named Rules
**The Läden-Regel.** Ladengrün bedeutet „hier kann man etwas tun“ oder „das ist das Neueste“. Es erscheint nie als Dekorfläche, nie als Abschnittshintergrund, nie auf mehr als einem Eintrag pro Chronik.

**The Nur-Tageslicht-Regel.** Das System ist nur hell. Schiefer-Flächen sind Rahmen, kein dunkles Thema.

## Typography

**Display Font:** Archivo (variable, `wdth`-Achse), Fallback ui-sans-serif, system-ui, sans-serif
**Body Font:** Archivo, gleiche Familie in normaler Breite

**Character:** Eine Familie, zwei Stimmen. Überschriften laufen schmal (80 % Breite, im Hero 75 %) und kräftig (750), wie in Holz geschnittene Hausinschriften; der Lesetext steht in normaler Breite ruhig und großzügig gesetzt.

### Hierarchy
- **Display** (750, `clamp(2.75rem, 4.8vw, 5.5rem)`, 1.12, Breite 75 %): Nur das H1 „Diederichskotten“ im Startseiten-Gefach.
- **Seitentitel** (750, 2.25rem bis 3.75rem ab 768px, 1.12): H1 im Schiefer-Seitenkopf der Unterseiten.
- **Headline** (750, 1.875rem, ab 768px 2.25rem, 1.12): Abschnitts-H2, Jahresmarken.
- **Title** (750, 1.5rem, ab 768px 1.875rem, 1.12): Titel der Arbeitseinsätze; `.lesetext` h3/h4 auf 1.375rem.
- **Zahl** (750, 2.25rem, `tabular-nums`): Kennzahlen 1629 / 1990 / Datum, Jahreszahlen der Historie.
- **Body** (400, 1.0625rem, 1.65): Fließtext; Lesespalte maximal 68ch. Einleitungen und Absätze unter H2 in 1.125rem.
- **Label** (600, 1rem): Schaltflächen, Navigation, Datumszeilen, „Weiterlesen“.
- **Klein** (400, 0.875rem, eng): Bildunterschriften, Pressedatum, Förderhinweis, in Stein.

### Named Rules
**The Zwei-Stimmen-Regel.** Alles, was Überschrift ist (h1 bis h4 und die `display`-Utility), läuft schmal und kräftig mit `text-wrap: balance`; alles andere bleibt Archivo normaler Breite. Keine zweite Schriftfamilie.

**The Ruhige-Spalte-Regel.** Lesetext steht als Spalte von höchstens 68ch im Gefach, Absätze mit 1em Abstand, `text-wrap: pretty`.

## Layout

Das Raster ist ein Fachwerk: ein Grid- oder Flex-Container mit Schiefer-Hintergrund und Schiefer-Rand in Balkenbreite, dessen Kinder Kalk-Felder sind; der `gap` in Balkenbreite wird so zur sichtbaren Fuge. Balkenbreite ist 6px, ab 768px 10px.

- **Container:** Inhalte in `max-w-7xl` (1280px) mit 16px Seitenrand, ab 768px 24px. Chroniken (Baufortschritt, Presse) in 1024px, Historie in 896px. Das Startseiten-Fachwerk läuft bis 1600px nahezu randlos.
- **Startseite oben:** 12-Spalten-Fachwerk ab 1024px: Foto-Gefach 7 Spalten, Titel-Gefach 5 Spalten, darunter drei Zahl-Gefache zu je 4 Spalten. Darunter einspaltig.
- **Abschnittsrhythmus:** Abschnitte im Abstand von 64px, ab 768px 96px. Gefach-Innenabstand 20 bis 24px, in Kopfzeilen 16px vertikal, in großen Gefachen bis 40px.
- **Galerie:** Fotos als Fachwerk-Reihe; zwei pro Reihe mobil, ab 1024px bis zu vier, die letzte Reihe wächst und füllt.
- **Ständer:** Einrückung 16px (ab 768px 32px), Balken links, Einträge 24px (ab 768px 48px) eingerückt, damit der Riegel die Lücke überbrückt.
- **Klebende Jahresleiste** auf /baufortschritt mit Schiefer-Unterkante in Balkenbreite; `scroll-padding-top: 4.5rem`.

### Named Rules
**The Fugen-Regel.** Zusammengehörige Inhalte teilen sich ein Balkenwerk. Abstand zwischen Feldern einer Gruppe ist immer die Balkenbreite in Schiefer, nie Weißraum.

## Elevation & Depth

Das System ist flach. Tiefe entsteht durch den Kontrast zwischen Schiefer-Balken und Kalk-Gefach, nicht durch Schatten. Overlays (Lightbox, mobiles Menü) liegen über einem Schiefer-Schleier (80 % bzw. 70 % Deckkraft).

### Named Rules
**The Balken-statt-Schatten-Regel.** Kein `box-shadow` auf Inhaltsflächen. Wo etwas abgehoben werden soll, bekommt es einen Schiefer-Rahmen in Balkenbreite.

## Shapes

Kantig. Gefache, Fotos, Seitenkopf, Ständer und Riegel haben 0px Radius; interaktive Elemente (Schaltflächen, Dialog) 2px (`--radius`, auf alle Radius-Stufen gemappt). Ränder sind entweder Balken (6/10px Schiefer) oder Schaltflächen-Kontur (2px). Unterstreichungen sitzen 0.2em unter der Grundlinie, 1px stark, beim Hover von Lesetext-Links 2px.

### Named Rules
**The Kanten-Regel.** Kein Radius über 2px. Keine Pillen, keine runden Avatare, keine abgerundeten Karten.

## Components

### Buttons
Tür und Laden: schwer, eindeutig, eckig.
- **Shape:** fast scharf (2px), 2px Rand.
- **Primary:** Ladengrün mit weißer Schrift, 600, Mindesthöhe 44px (groß 52px), 20px seitlich (groß 24px). Icons 20px links vom Text.
- **Hover / Focus:** Farbwechsel in 150ms auf Ladengrün tief. Fokus: 3px Ladengrün-Kontur mit 3px Abstand (global für alles Fokussierbare).
- **Outline:** transparenter Grund, Schiefer-Rand und -Schrift; Hover füllt Schiefer, Schrift Kalk. Sekundäre Aktion neben der primären.
- **Inverse:** dieselbe Logik auf Schiefer-Grund (Kalk-Rand), z. B. Menü-Schaltfläche.
- **Link:** Ladengrün unterstrichen, Hover Ladengrün tief.

### Cards / Containers (Gefache)
- **Corner Style:** 0px.
- **Background:** Kalk im Schiefer-Balkenwerk.
- **Shadow Strategy:** keine (siehe Elevation & Depth).
- **Border:** das Balkenwerk selbst, 6/10px Schiefer.
- **Internal Padding:** 20px, ab 768px 24px bis 32px.

### Navigation
- **Style:** Schieferband mit Logo auf Kalk-Kachel (48px) und Vereinsname in Display-Stimme (1.25rem).
- **Links:** 600, Kalk 85 %, Hover Kalk voll. Aktuelle Seite: 4px Ladengrün-Strich unten.
- **Mobil:** Inverse-Icon-Schaltfläche öffnet ein Schiefer-Sheet von rechts; aktuelle Seite mit 4px Ladengrün-Unterstreichung, Hover Schiefer hell.

### Seitenkopf
Schiefer-Fläche unter der Navigation, getrennt durch eine 1px Kante in Schiefer hell. H1 in Kalk (2.25rem bis 3.75rem), Einleitung bis 60ch in Kalk 85 %, 1.125 bis 1.25rem.

### Ständer und Riegel (Signatur)
Senkrechter Schiefer-Balken in Balkenbreite, links neben einer geordneten Liste. Pro Eintrag ein waagerechter Riegel in Balkenbreite, 24px (ab 768px 48px) lang, auf Höhe des Eintragskopfs. Der neueste Arbeitseinsatz hat Riegel und Kopf in Ladengrün, Datum in Weiß 85 %. Bewegung: Der Riegel skaliert beim Einblenden einmal von links (`scaleX(0)` nach 1, 700ms, `ease-riegel`), gesteuert über `animation-timeline: view()`; nur bei `prefers-reduced-motion: no-preference` und ohne Rückwärts-Füllung, damit er im Druck sichtbar bleibt.

### Arbeitseinsatz-Eintrag
Ein Fachwerk aus Kopf-Gefach (Datum in Stein, Titel in Title-Stimme), Foto-Gefachen (4:3 als Vorschau) und Lesetext-Gefach. Die Vorschau endet mit „Weiterlesen“ und Pfeil in Ladengrün.

### Galerie und Lightbox
Fotos füllen ihre Gefache (`object-cover`), Hover zoomt das Bild auf 103 % in 500ms `ease-riegel`, Bildunterschrift klein in Stein darunter. Die Lightbox ist ein Kalk-Dialog mit Schiefer-Bühne (70dvh, `object-contain`), Outline-Schaltflächen „Zurück“/„Weiter“, Pfeiltasten und Zähler in `tabular-nums`.

### Spenden-Gefach
Fachwerk aus QR-Code-Gefach, Aufruf-Gefach (Satz in Display-Stimme 1.5rem, große Primär-Schaltfläche) und einem über die volle Breite laufenden Förder-Gefach mit Heimat-NRW-Logo.

## Do's and Don'ts

### Do:
- **Do** gruppiere zusammengehörige Inhalte als Kalk-Gefache in einem Schiefer-Balkenwerk mit Fuge in Balkenbreite (6px, ab 768px 10px).
- **Do** setze Ladengrün nur auf Aktionen und auf genau einen „neuesten“ Eintrag.
- **Do** setze Überschriften in Archivo schmal (80 %) und 750; Lesetext in Archivo normal, 1.0625rem, Zeilenhöhe 1.65, höchstens 68ch.
- **Do** halte Schaltflächen mindestens 44px hoch und nutze den globalen Fokusring (3px Ladengrün, 3px Abstand).
- **Do** führe Chroniken als Ständer mit Riegeln; Einblend-Bewegung nur als einmaliges Einfahren und nur ohne reduzierte Bewegung.
- **Do** nutze `tabular-nums` für Jahreszahlen, Daten und Zähler.

### Don't:
- **Don't** lege Schatten auf Inhaltsflächen; Abhebung entsteht durch Balken.
- **Don't** runde Ecken über 2px.
- **Don't** setze Text als Overlay auf ein Hero-Foto; Foto und Titel stehen in getrennten Gefachen.
- **Don't** reihe gleiche Neuigkeiten-Karten auf grauem Grund; Einträge hängen am Ständer.
- **Don't** führe einen Dark Mode oder eine zweite Schriftfamilie ein.
