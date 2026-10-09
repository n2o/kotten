---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/(stripe)/baufortschritt/page.tsx"]
---

# Surface: Diederichskotten Website (Start + Baufortschritt, gilt für alle Routen)

Mode: Persuade (Start), Read (Baufortschritt, Historie, Über uns, Rechtliches).
Audience: Spender/Förderer, Pfadfinder/Mitglieder, Presse/Stadt/Denkmalbehörde.
Action: Spenden (PayPal) und Fortschritt nachvollziehen.
Proof: datierte Arbeitssamstage mit Fotos, konkrete Förderzahlen, RGA-Artikel.

## Direction contract

THESIS: Die Seite ist gebaut wie ein Bergisches Fachwerkhaus. Schieferschwarze Balken sind das Layoutraster, kalkweiße Gefache tragen Text und Fotos, grüne Läden und Türen sind die Aktionen. Verweigert: Hero-Foto mit Overlay-Text plus Reihe gleicher Neuigkeiten-Karten auf grauem Grund.

OWN-WORLD: Bergischer Dreiklang. Schiefer #22272B als Flächen (Header, Footer, Balkenfugen), Kalkweiß #F6F6F3 als Gefach, Ladengrün #1F5A41 nur für Aktionen und das Aktuelle. Kantige Ecken (0–2px), dicke Balkenlinien statt Schatten, keine Karten mit Schlagschatten. Archivo: schmal/fett für Überschriften, normal für Text.

STORY: Besucher sieht das echte Haus und die Hände, die es retten, versteht den Bedarf mit Zahlen, und spendet oder verfolgt Samstag für Samstag den Fortschritt.

FIRST VIEWPORT: Schieferband-Navigation. Darunter Fachwerk-Raster voller Breite: großes Gefach links (≈60%) mit Kottenfoto, rechtes Gefach weiß mit H1 „Diederichskotten“, ein Satz, grüne Tür-Schaltfläche „Jetzt spenden“ (primär) und „Zum Baufortschritt“. Unter beidem eine Riegelreihe aus drei Zahl-Gefachen (1629 / 1990 / letzter Arbeitssamstag).

FORM: Bergischer Dreiklang, Position 1 meiner Liste (Impeccable's Pick, vom Nutzer gewählt), Seed 5a417a9c. Signatur: Baufortschritt als senkrechter Ständer mit Riegeln zu jedem Arbeitssamstag; der neueste Eintrag trägt das Ladengrün. Bewegung: Riegel fahren beim Einblenden einmal ein, prefers-reduced-motion respektiert. Lesetext steht als ruhige Spalte im Gefach (Raise von Secession).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
