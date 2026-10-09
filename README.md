# Diederichskotten

Website des Diederichskotten in Remscheid, betrieben vom Förderverein der Pfadfinder im Hammertal e.V.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Komponenten in `src/components/ui`)
- [lucide-react](https://lucide.dev/) für Icons

## Befehle

```bash
bun install        # Abhängigkeiten installieren
bun dev            # Entwicklungsserver auf http://localhost:3000
bun run build      # Produktionsbuild
bun run lint       # ESLint
```

## Neuer Baufortschritt-Eintrag

1. Bilder als WebP ablegen in `src/images/<jahr>/<YYYY-MM-DD>_<thema>/`.
   - Gesichter unkenntlich machen.
   - Metadaten entfernen.
   - Maximal 2000 px Kantenlänge.
2. In `src/content/baufortschritt.tsx` ein Objekt in das Array `posts` einfügen. Die Liste wird automatisch nach Datum sortiert (neueste zuerst).

   Felder: `id`, `date` (ISO, `YYYY-MM-DD`), `title`, `teaser`, `cover` (bis zu 3 Bilder), `content`.

## Design

Gestalterische Hinweise stehen in [PRODUCT.md](./PRODUCT.md) und DESIGN.md.
