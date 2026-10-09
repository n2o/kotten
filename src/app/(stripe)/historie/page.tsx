import { PageHeader } from "@/components/page-header"
import {
  Building2Icon,
  CalendarCheckIcon,
  CoinsIcon,
  FlameIcon,
  HammerIcon,
  HandshakeIcon,
  HeartIcon,
  HouseIcon,
  LandmarkIcon,
  PaintbrushIcon,
  ScrollTextIcon,
  ShieldIcon,
  UsersIcon,
  WavesIcon,
  type LucideIcon,
} from "lucide-react"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Historie",
}

type Eintrag = {
  /** Anzeigetext der Zeit */
  zeit: string
  /** Maschinenlesbar für <time>: Jahr oder Jahr-Monat */
  datum: string
  titel: string
  icon: LucideIcon
  text: ReactNode
  extra?: ReactNode
}

const eintraege: Eintrag[] = [
  {
    zeit: "1629",
    datum: "1629",
    titel: "Erste urkundliche Erwähnung",
    icon: ScrollTextIcon,
    text: (
      <>
        Der Kotten (damals noch <em>Hens-Jans-Kotten</em>) findet seine erste
        Erwähnung in historischen Schriftstücken. Zu dieser Zeit wurde er als
        Schleifmühle genutzt.
      </>
    ),
  },
  {
    zeit: "1780",
    datum: "1780",
    titel: "Namensgebung Diederichskotten",
    icon: LandmarkIcon,
    text: (
      <>
        Der Kotten erhält seinen heutigen Namen <em>Diederichskotten</em>. Das
        Gebäude diente weiterhin zum Schleifen von Stahl und Eisenwaren.
      </>
    ),
  },
  {
    zeit: "1852",
    datum: "1852",
    titel: "Bau des heutigen Wohnhauses",
    icon: HouseIcon,
    text: (
      <>
        Das heutige Wohnhaus wird errichtet. 1854 wohnten 14 Personen im
        Gebäude: Der Schleifer, seine Ehefrau und Kinder, Lehrling und Knecht -
        in dieser Zeit durchaus üblich, da Kost und Logis vom Herrn gestellt
        wurden.
      </>
    ),
  },
  {
    zeit: "19. - 20. Jh.",
    datum: "",
    titel: "Vielfältige Nutzung als Werkstatt",
    icon: CoinsIcon,
    text: (
      <>
        Im Laufe der Jahrhunderte wurde der Kotten für verschiedenste
        handwerkliche Zwecke genutzt: Produktion von Feilen, Herstellung von
        Walkstoffen, Schleifen von Stahl und Eisenwaren sowie Drechselei.
      </>
    ),
  },
  {
    zeit: "1980er Jahre",
    datum: "1980",
    titel: "Beginn der Pfadfindernutzung",
    icon: UsersIcon,
    text: (
      <>
        Der Diederichskotten wird erstmals von Remscheider Pfadfindern genutzt.
        Ein Pfadfinder hatte den Kotten privat von der Stadt übernommen und ihn
        der Gruppe zur Verfügung gestellt.
      </>
    ),
  },
  {
    zeit: "März 1990",
    datum: "1990-03",
    titel: "Gründung Diederichskotten e.V.",
    icon: HandshakeIcon,
    text: (
      <>
        Aufgrund eines finanziellen Engpasses schließen sich acht Pfadfinder zu
        einem Verein zusammen, um den Kotten zu erwerben und zu erhalten.
        Satzungszweck:{" "}
        <em>
          &quot;Erwerb und die Erhaltung des Grundstücks Diederichskotten zum
          Zwecke der Bereitstellung des Gebäudes und des Grundstückes für
          Pfadfinder im Besonderen und für Jugendarbeit&quot;
        </em>
      </>
    ),
  },
  {
    zeit: "1990 - 2010er",
    datum: "1990",
    titel: "Jahre des Engagements",
    icon: HeartIcon,
    text: (
      <>
        Die Vereinsmitglieder leisten jeden Monat einen Beitrag von 100 DM sowie
        weitere Sonderzahlungen, um Kredit und laufende Kosten zu stemmen. Nach
        einigen Jahren sind die Kredite abbezahlt und die monatlichen Beiträge
        können gesenkt werden.
      </>
    ),
  },
  {
    zeit: "2012",
    datum: "2012",
    titel: "Neuaufbau des Schuppens",
    icon: HammerIcon,
    text: (
      <>
        Aufgrund der Einsturzgefahr des alten Hühnerstalls wird mit dem
        Neuaufbau begonnen. In Eigenregie entsteht eine Außenküche für
        Pfadfindergruppen inklusive zwei WCs.
      </>
    ),
  },
  {
    zeit: "November 2012",
    datum: "2012-11",
    titel: "Gründung des Fördervereins",
    icon: Building2Icon,
    text: (
      <>
        Der <em>Förderverein der Pfadfinder im Hammertal e.V.</em> wird
        gegründet und vom Finanzamt Remscheid als gemeinnützig anerkannt. Dies
        ermöglicht es Unterstützern, Spendenbescheinigungen zu erhalten. Aktuell
        hat der Förderverein 12 Mitglieder.
      </>
    ),
  },
  {
    zeit: "2021",
    datum: "2021",
    titel: "Hochwasserkatastrophe",
    icon: WavesIcon,
    text: (
      <>
        Das verheerende Hochwasser trifft auch den Diederichskotten und wirft
        das Projekt um viele Arbeitsstunden zurück. Die Aufräum- und
        Reparaturarbeiten beginnen.
      </>
    ),
  },
  {
    zeit: "Seit Jahren",
    datum: "",
    titel: "Unter Denkmalschutz",
    icon: ShieldIcon,
    text: (
      <>
        Der Diederichskotten steht unter Denkmalschutz, was besondere
        Anforderungen an Sanierungsarbeiten stellt. Bestimmte Baumaßnahmen sind
        genehmigungspflichtig und spezielle Materialien wie RAL-Farben oder
        Lehmbauweise werden vorgeschrieben, um den historischen Charakter zu
        erhalten.
      </>
    ),
  },
  {
    zeit: "Sommer 2024",
    datum: "2024-06",
    titel: "Beginn der großen Sanierung",
    icon: FlameIcon,
    text: (
      <>
        Die Bausubstanz des Wohnhauses ist kritisch: Decken eingestürzt, Wände
        abgebröckelt, Balken marode. Mit Unterstützung des Landes NRW (23.500
        €), der Stadt Remscheid (4.000 €) und der Stadtsparkasse Remscheid
        (5.000 €) wird die Zimmerei Zultner beauftragt, die maroden Balken
        auszutauschen. Die Gefache werden in Eigenleistung ausgemauert. Der
        Gesamtschaden beläuft sich auf ca. 100.000 €.
      </>
    ),
  },
  {
    zeit: "Oktober 2024",
    datum: "2024-10",
    titel: "PayPal-Spendenkampagne",
    icon: CalendarCheckIcon,
    text: (
      <>
        Nach dem ersten Bauabschnitt ist die Kasse leer. Eine
        PayPal-Spendenkampagne wird gestartet, um die weiteren
        Sanierungsarbeiten zu finanzieren.
      </>
    ),
  },
  {
    zeit: "Februar 2025",
    datum: "2025-02",
    titel: "Crowdfunding-Kampagne",
    icon: UsersIcon,
    text: (
      <>
        Start einer Crowdfunding-Kampagne bei der Volksbank im Bergischen Land
        mit einem Spendenziel von 5.000 €. Die Volksbank unterstützt mit einem
        Startbonus von 1.000 € und legt für jeden Spender weitere 5 € dazu.
        Ziel: Eigenanteil für weitere Förderung durch das Land NRW aufbringen.
      </>
    ),
  },
  {
    zeit: "2025",
    datum: "2025",
    titel: "Laufende Sanierungsarbeiten",
    icon: PaintbrushIcon,
    text: (
      <>
        Die Arbeiten gehen stetig voran: Außenwände werden verputzt, Innenwände
        mit Strohmatten und Lehm versehen, das Grundstück wird aufgeräumt.
        Geplant sind noch: Elektroinstallation, neue denkmalgerechte Fenster,
        Sanierung der oberen Etage. Erwartete Kosten für 2025: ca. 50.000 €.
      </>
    ),
    extra: (
      <>
        Der Verein hat derzeit 15 Mitglieder, die sich einmal monatlich beim
        &quot;Arbeitssamstag&quot; engagieren, um Grundstück und Gebäude in
        einem guten Zustand zu halten.
      </>
    ),
  },
]

export default function Page() {
  return (
    <>
      <PageHeader title="Historie">
        <p>
          Vom Schleifkotten zur Pfadfinderstätte - Eine Reise durch rund 400
          Jahre Geschichte des Diederichskottens.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
        {/* Ständer: senkrechter Balken, Riegel führen zu jedem Eintrag */}
        <ol className="relative ml-4 border-l-[length:var(--balken)] border-schiefer md:ml-8">
          {eintraege.map(({ zeit, datum, titel, icon: Icon, text, extra }) => (
            <li
              key={titel}
              className="relative pt-2 pb-10 pl-6 last:pb-0 md:pl-12"
            >
              <span
                aria-hidden
                className="absolute top-[1.1rem] left-[calc(var(--balken)/-2-1rem)] flex size-8 items-center justify-center bg-schiefer text-kalk"
              >
                <Icon className="size-4" />
              </span>
              <span
                aria-hidden
                className="riegel absolute top-[1.6rem] left-0 h-[var(--balken)] w-3 bg-schiefer md:w-8"
              />
              <p className="display text-3xl tabular-nums md:text-4xl">
                {datum ? <time dateTime={datum}>{zeit}</time> : zeit}
              </p>
              <h2 className="mt-1 text-xl md:text-2xl">
                {titel}
              </h2>
              <p className="mt-2 max-w-prose">{text}</p>
              {extra && (
                <p className="mt-4 max-w-prose font-semibold">{extra}</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
