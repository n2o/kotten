# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Spender und Förderer** aus Remscheid und dem Bergischen Land (Privatleute, Firmen, Clubs wie Lions, Banken, Stiftungen). Sie wollen sehen, dass ihr Geld sichtbar im Gebäude ankommt, und brauchen einen einfachen Weg zu spenden.
- **Pfadfinder und Vereinsmitglieder** (DPB Remscheid, Eltern, Mitglieder beider Vereine). Sie verfolgen, was an den Arbeitssamstagen geschafft wurde.
- **Presse, Stadt Remscheid, Denkmalbehörde, Fördermittelgeber (Land NRW / Heimatförderung)**. Sie brauchen nachvollziehbare Belege für Fortschritt und Mittelverwendung.

## Product Purpose

Website des Diederichskottens, eines denkmalgeschützten Schleifkottens im Hammertal (Remscheid), getragen vom Diederichskotten e.V. und dem gemeinnützigen Förderverein der Pfadfinder im Hammertal e.V. Die Seite dokumentiert die laufende Sanierung des Wohnhauses, erzählt die Geschichte des Kottens und sammelt Unterstützung. Erfolg: Besucher verstehen, warum der Kotten erhalten werden muss, sehen den Fortschritt, und spenden oder helfen.

## Positioning

Ein echtes Fachwerk-Denkmal, das nicht von einer Firma, sondern von Pfadfindern und Ehrenamtlichen mit eigenen Händen saniert wird: Lehmsteine, Lehmputz, Strohmatten, Samstag für Samstag. Die Arbeit selbst ist der Beweis.

## Operating Context

- Regelmäßige **Arbeitssamstage**; danach gibt es Fotos und einen kurzen Bericht. Das ist der häufigste neue Inhalt.
- Fachfirma: Zimmerei Zultner (Hückeswagen) für Balkentausch; Eigenleistung für Gefache und Putz.
- Inhalte werden von Hand im Code gepflegt (keine CMS-Anbindung).

## Capabilities and Constraints

- Next.js App Router, React 19, deployed auf Vercel, Sentry, Vercel Analytics.
- Routen: Start, Baufortschritt (Chronik aller Arbeitssamstage), Über uns, Historie, Impressum, Datenschutz.
- Spendenwege: PayPal-Spendenlink mit QR-Code; vergangene Volksbank-Crowdfunding-Kampagne.
- Fotos von Personen müssen vor Veröffentlichung unkenntlich gemacht werden (Gesichter verpixeln/weichzeichnen). Bilder als WebP.
- Sprache: Deutsch.

## Brand Commitments

- Name: Diederichskotten; Vereinslogo `src/images/logo.svg`.
- Förderlogo Heimat NRW (`src/images/heimat-nrw.svg`) muss bei geförderten Maßnahmen sichtbar bleiben.
- Ton: bodenständig, herzlich, ehrlich über Kosten und Bedarf; spricht Leser mal mit „ihr", mal mit „Sie" an (Spendenaufruf: „Sie").

## Evidence on Hand

- Baufotos 2024 bis 2026 in `src/images/`.
- Zwei RGA-Presseartikel (Oktober 2024), verlinkt in `src/components/rga.tsx`.
- Konkrete Zahlen: Schaden ca. 100.000 €, Förderung Land NRW 23.500 €, Stadt 4.000 €, Stadtsparkasse 5.000 €, Lions Club Büchermarkt.
- Historische Zeitleiste ab 1629 (`src/app/(stripe)/historie`).
- Keine Testimonials, keine Spendenstände in Echtzeit: nichts davon erfinden.

## Product Principles

1. Fortschritt zeigen statt behaupten: Fotos und Datum jedes Arbeitssamstags.
2. Ehrlich über Bedarf: Kosten und Förderungen konkret benennen.
3. Spenden immer nur einen Schritt entfernt, aber nicht aufdringlich.
4. Das Denkmal und die Menschen respektieren: Privatsphäre der Helfenden, sorgfältige Geschichte.

## Accessibility & Inclusion

Zielniveau WCAG 2.2 AA. Viele ältere Leser und Mobilnutzer: gut lesbare Schriftgrößen, ausreichender Kontrast, aussagekräftige Alt-Texte für alle Baufotos, tastaturbedienbare Lightbox und Navigation.
