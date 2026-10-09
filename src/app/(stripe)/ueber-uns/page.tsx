import { ExternalLink } from "@/components/external-link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Wohnhaus } from "@/content/baufortschritt"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Über uns",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Über uns" />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="fachwerk md:grid-cols-2">
          <section aria-labelledby="uebernahme" className="p-6 md:p-8">
            <h2 id="uebernahme" className="mb-4 text-3xl">
              Übernahme des Kottens durch uns
            </h2>
            <div className="lesetext">
              <p>
                Seit den 1980er Jahren wird der Kotten von Remscheider
                Pfadfindern genutzt. Einer von ihnen hatte den Kotten privat von
                der Stadt übernommen und ihn der Gruppe zur Verfügung gestellt.
                Nach ein paar Jahren kam es zu einem finanziellen Engpass,
                weswegen sich die Gruppe etwas überlegen musste. Acht von ihnen
                schlossen sich im März 1990 privat zu einem Verein zusammen.
                Zweck des Vereins war der{" "}
                <i>
                  „Erwerb und die Erhaltung des Grundstücks Diederichskotten zum
                  Zwecke der Bereitstellung des Gebäudes und des Grundstückes
                  für Pfadfinder im Besonderen und für Jugendarbeit“
                </i>{" "}
                (Auszug aus der Satzung des Vereins). Viele Jahre bedeutete dies
                für die Vereinsmitglieder, jeden Monat einen Beitrag von 100 DM
                und weitere Sonderzahlungen zu leisten, damit sowohl der Kredit
                als auch die laufenden Kosten gestemmt werden konnten. Seit
                einigen Jahren sind nun die Kredite bezahlt und die monatlichen
                Beiträge konnten etwas gesenkt werden. Jetzt hat der Verein mit
                der Instandhaltung bzw. der Sanierung zu kämpfen. Dabei hilft
                ihm der „Förderverein der Pfadfinder im Hammertal e.V.“.
              </p>
            </div>
          </section>

          <section aria-labelledby="verein" className="p-6 md:p-8">
            <h2 id="verein" className="mb-4 text-3xl">
              Förderverein der Pfadfinder im Hammertal e.V.
            </h2>
            <div className="lesetext">
              <p>
                Für die Unterhaltung eines denkmalgeschützten Gebäudes wie den
                Diederichskotten und die Umsetzung neuer Maßnahmen am Gelände
                (z.B. das „Projekt Schuppen“) benötigt man Ideen, viele Leute,
                deren Zeit und natürlich auch ausreichend finanzielle Mittel.
                Wir können uns glücklich schätzen, dass wir mal mehr und mal
                weniger über all diese Dinge verfügen: so konnten wir nicht nur
                durch den unermüdlichen Einsatz aller Mitglieder des
                Diederichskotten e.V., sondern auch aufgrund der vielen
                fleißigen Helfer des{" "}
                <ExternalLink
                  href="https://dpb-remscheid.de"
                >
                  Deutschen Pfadfinderbundes in Remscheid
                </ExternalLink>{" "}
                viele kleine und auch große Projekte am Haus und Gelände
                umsetzen. Dabei waren und sind wir immer mal wieder auch auf die
                finanzielle und / oder materielle Hilfe von Freunden und
                Förderern angewiesen. Da wir jedoch auch wissen, dass es für
                diese immer schwieriger wird, uns ohne entsprechende
                Spendenbescheinigung zu unterstützen, haben wir im November 2012
                den „Förderverein der Pfadfinder im Hammertal e.V.“ gegründet
                und durch Bescheid des Finanzamtes Remscheid als gemeinnützig
                anerkennen lassen. Satzungsmäßiger Zweck des Vereins ist die
                Beschaffung von Mitteln zur Förderung der Erziehung durch den
                Deutschen Pfadfinderbund e.V., insbesondere der Pfadfinder:innen
                im Diederichskotten. So unterstützt dieser die Remscheider
                Pfadfinder:innen und den Diederichskotten e.V. z.B. im Rahmen
                der Industriedenkmalpflege finanziell, materiell und
                organisatorisch bei der Beschaffung von Materialien jeglicher
                Art für die Instandsetzung und Erhaltung unseres Gruppenheims.
                Zurzeit hat der Förderverein zwölf Mitglieder.
              </p>
            </div>
          </section>

          <section aria-labelledby="verwendung" className="p-6 md:p-8">
            <h2 id="verwendung" className="mb-4 text-3xl">
              Wozu wird der Kotten heute genutzt?
            </h2>
            <div className="lesetext">
              <p>
                Heute bietet der Diederichskotten vor allem einen Rückzugsort
                für die Remscheider Pfadfindergruppen. Diese führen dort
                nachmittags Gruppenstunden durch oder kehren auf Fahrten und
                Lagern hier ein. Dazu machen sie es sich im Schleifkotten, und
                nach der Sanierung auch wieder im Wohnhaus gemütlich oder nutzen
                die große Wiese, um ihre Kohten und Jurten aufzuschlagen.
              </p>
              <p>
                Um Grundstück und Gebäude dafür in einem guten Zustand zu
                halten, engagieren sich die Mitglieder der Vereine einmal im
                Monat einen Tag lang beim sogenannten „Arbeitssamstag“.
              </p>
            </div>
          </section>

          <section aria-labelledby="grundstueck" className="p-6 md:p-8">
            <h2 id="grundstueck" className="mb-4 text-3xl">
              Das Grundstück
            </h2>
            <div className="lesetext">
              <p>
                Wenn ihr euch umschaut, seht ihr das wunderschöne Grundstück
                unseres Kottens.
              </p>
              <p>
                Hinter der Brücke liegt das Eingangstor, welches das Wappen der
                ersten hier ansässigen Pfadfindergruppe, dem Stamm Heinrich der
                Schwarze, zeigt. Betritt man das Grundstück, läuft man direkt
                auf das ehemals als Wohnhaus genutzte Hauptgebäude zu. Davor
                befindet sich das wiederaufgebaute Gebäude mit Wanderküche und
                WCs.
              </p>
              <p>
                Auf der rechten Seite liegt die alte Werkstatt mit den
                Überresten des alten Wasserrades und einem dazugehörigen
                Lagerraum. Hinter dem Gebäude stehen unsere Kotten-Bienen.
              </p>
              <p>
                Auf der linken Seite des Hauptgebäudes findet man eine große
                Wiese, die vor allem für Pfadfinderlager und Gruppenstunden
                genutzt wird.
              </p>
            </div>
          </section>
        </div>

        <section aria-labelledby="wohnhaus" className="mt-12">
          <h2 id="wohnhaus" className="mb-4 text-3xl">
            Das Wohnhaus
          </h2>
          <div className="lesetext">
            <Wohnhaus />
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link href="/baufortschritt">Zum Baufortschritt</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
