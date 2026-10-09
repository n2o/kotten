import { legalLinks, links } from "@/components/navigation/links"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-20 bg-schiefer text-kalk">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="display text-2xl">Diederichskotten</p>
          <p className="mt-2 text-kalk/80">
            Förderverein der Pfadfinder im Hammertal e.V.
            <br />
            Wilhelmstraße 64, 42855 Remscheid
          </p>
          <p className="mt-2">
            <a
              href="mailto:info@diederichskotten.de"
              className="underline hover:text-white"
            >
              info@diederichskotten.de
            </a>
          </p>
        </div>
        <nav aria-label="Seiten">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Rechtliches">
          <ul className="space-y-1">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
