import { ExternalLink } from "@/components/external-link"
import { Gallery, GalleryImage } from "@/components/gallery"
import { Spenden } from "@/components/spenden"
import aussenbereichKueche1 from "@/images/2024/aussenbereich-kueche01.webp"
import aussenbereichKueche2 from "@/images/2024/aussenbereich-kueche02.webp"
import dachbodenNeueBalken from "@/images/2024/dachboden-neue-balken.webp"
import dachbodenSchlafbereich from "@/images/2024/dachboden-schlafbereich.webp"
import kottenAussenSpanplatte from "@/images/2024/kotten-aussen-spanplatte.webp"
import okt01 from "@/images/2024-10-26/bauphase01.webp"
import okt02 from "@/images/2024-10-26/bauphase02.webp"
import okt03 from "@/images/2024-10-26/bauphase03.webp"
import okt04 from "@/images/2024-10-26/bauphase04.webp"
import okt05 from "@/images/2024-10-26/bauphase05.webp"
import okt06 from "@/images/2024-10-26/bauphase06.webp"
import okt07 from "@/images/2024-10-26/bauphase07.webp"
import okt08 from "@/images/2024-10-26/bauphase08.webp"
import okt09 from "@/images/2024-10-26/bauphase09.webp"
import okt10 from "@/images/2024-10-26/bauphase10.webp"
import okt13 from "@/images/2024-10-26/bauphase13.webp"
import okt15 from "@/images/2024-10-26/bauphase15.webp"
import okt16 from "@/images/2024-10-26/bauphase16.webp"
import okt18 from "@/images/2024-10-26/bauphase18.webp"
import front20250214 from "@/images/2025/2025-02-14_front.webp"
import verputzteWand20250214 from "@/images/2025/2025-02-14_verputzte-wand.webp"
import anderes01 from "@/images/2025/2025-07-01_baufortschritt/anderes01.webp"
import anderes02 from "@/images/2025/2025-07-01_baufortschritt/anderes02.webp"
import aussen01 from "@/images/2025/2025-07-01_baufortschritt/aussen01.webp"
import aussen02 from "@/images/2025/2025-07-01_baufortschritt/aussen02.webp"
import aussen03 from "@/images/2025/2025-07-01_baufortschritt/aussen03.webp"
import aussen04 from "@/images/2025/2025-07-01_baufortschritt/aussen04.webp"
import innen01 from "@/images/2025/2025-07-01_baufortschritt/innen01.webp"
import innen02 from "@/images/2025/2025-07-01_baufortschritt/innen02.webp"
import innen03 from "@/images/2025/2025-07-01_baufortschritt/innen03.webp"
import innen04 from "@/images/2025/2025-07-01_baufortschritt/innen04.webp"
import kottengeruest from "@/images/2025/2025-11_kottengeruest.webp"
import fruehjahr01 from "@/images/2026/2026-04-18_fruehjahrsauftakt/01.webp"
import fruehjahr02 from "@/images/2026/2026-04-18_fruehjahrsauftakt/02.webp"
import fruehjahr03 from "@/images/2026/2026-04-18_fruehjahrsauftakt/03.webp"
import fruehjahr04 from "@/images/2026/2026-04-18_fruehjahrsauftakt/04.webp"
import fruehjahr05 from "@/images/2026/2026-04-18_fruehjahrsauftakt/05.webp"
import aug01 from "@/images/2026/2026-08-15_arbeitssamstag/01.webp"
import aug02 from "@/images/2026/2026-08-15_arbeitssamstag/02.webp"
import aug03 from "@/images/2026/2026-08-15_arbeitssamstag/03.webp"
import aug04 from "@/images/2026/2026-08-15_arbeitssamstag/04.webp"
import aug05 from "@/images/2026/2026-08-15_arbeitssamstag/05.webp"
import aug06 from "@/images/2026/2026-08-15_arbeitssamstag/06.webp"
import sep01 from "@/images/2026/2026-09-19_arbeitssamstag/01.webp"
import sep02 from "@/images/2026/2026-09-19_arbeitssamstag/02.webp"
import sep03 from "@/images/2026/2026-09-19_arbeitssamstag/03.webp"
import sep23 from "@/images/2026/2026-09-23_arbeitseinsatz/01.webp"
import { volksbankCrowdfundingLink20250214 } from "@/lib/links"
import { ReactNode } from "react"

export type Post = {
  /** Anker auf /baufortschritt */
  id: string
  /** ISO-Datum */
  date: string
  title: string
  teaser: string
  /** Bis zu drei Bilder für die Vorschau auf der Startseite */
  cover: GalleryImage[]
  content: ReactNode
}

const sep: GalleryImage[] = [
  {
    data: sep01,
    alt: "Mehrere Helfende arbeiten auf dem Gerüst und auf einer Leiter an der Fachwerkfassade.",
    caption: "Viele Hände am Giebel",
  },
  {
    data: sep02,
    alt: "Durch ein geöffnetes Gefach reicht eine Person im Haus einen Lehmstein heraus, unten liegt frischer Lehm.",
    caption: "Lehmsteine für die Gefache",
  },
  {
    data: sep03,
    alt: "Fachwerkwand neben dem Eingang: ein Gefach ist mit Lehmsteinen ausgemauert, die übrigen sind weiß verputzt.",
    caption: "Ausgemauertes Gefach neben der Tür",
  },
  {
    data: sep23,
    alt: "Eine große Gruppe streicht vom Gerüst und von Leitern aus die Gefache der Fassade weiß.",
    caption: "Einsatz am 23. September",
  },
]

const aug: GalleryImage[] = [
  {
    data: aug01,
    alt: "Eine Person auf dem Gerüst stemmt mit einem Abbruchhammer Putz und Füllung aus einem Gefach.",
    caption: "Alter Putz wird aufgestemmt",
  },
  {
    data: aug02,
    alt: "Blick von innen durch ein Fenster: Draußen auf dem Gerüst arbeitet eine Person, darunter klafft ein Loch in der Ziegelausmauerung, davor liegt Schutt.",
    caption: "Gefach unter dem Fenster geöffnet",
  },
  {
    data: aug03,
    alt: "Freigelegter Holzbalken mit Sägemehl, daneben eine Handsäge, im Hintergrund Gerüst und Wiese.",
    caption: "Freigelegter Balken",
  },
  {
    data: aug04,
    alt: "Blick von oben auf einen freigelegten, staubigen Balken im Innenraum, links eine Handsäge.",
    caption: "Der Balken von oben",
  },
  {
    data: aug05,
    alt: "Dachgeschossraum mit Sprossenfenster, darunter eine frisch aus Lehmsteinen gemauerte Brüstung.",
    caption: "Brüstung aus Lehmsteinen",
  },
  {
    data: aug06,
    alt: "Fachwerkgiebel mit Gerüst und Plane, die Gefache teils weiß verputzt, teils mit freiliegendem Lehm oder Ziegel.",
    caption: "Die Giebelseite mit Gerüst",
  },
]

/** Neueste zuerst, egal in welcher Reihenfolge Einträge ergänzt werden */
export const posts: Post[] = (
  [
    {
      id: "2026-09-19-arbeitssamstag",
      date: "2026-09-19",
      title: "Lehmsteine und frischer Anstrich",
      teaser:
        "Am Giebel wurden weitere Gefache mit Lehmsteinen ausgemauert und die Fassade an vielen Stellen weiß gestrichen.",
      cover: sep.slice(0, 3),
      content: (
        <>
          <p>
            Beim Arbeitseinsatz im September waren viele Hände gleichzeitig am
            Gerüst. Offene Gefache wurden mit Lehmsteinen ausgemauert, und an
            der Fassade wurden die Gefache weiß gestrichen.
          </p>
          <p>
            Einige Tage später, am 23. September, ging es mit einer großen
            Gruppe an der Fassade weiter.
          </p>
          <Gallery images={sep} />
        </>
      ),
    },
    {
      id: "2026-08-15-arbeitssamstag",
      date: "2026-08-15",
      title: "Gefache geöffnet, Balken freigelegt",
      teaser:
        "Vom Gerüst aus wurden alter Putz und Ausmauerung aufgestemmt, damit die Balken dahinter freiliegen.",
      cover: [aug[0], aug[2], aug[4]],
      content: (
        <>
          <p>
            Im August ging es am Giebel weiter. Vom Gerüst aus wurden Putz und
            alte Ziegelausmauerung aus mehreren Gefachen gestemmt, sodass die
            Balken dahinter freiliegen. Im Obergeschoss ist eine Brüstung unter
            dem Fenster bereits frisch mit Lehmsteinen ausgemauert.
          </p>
          <Gallery images={aug} />
        </>
      ),
    },
    {
      id: "2026-04-18-fruehjahrsauftakt",
      date: "2026-04-18",
      title: "Frühjahrsauftakt am Diederichskotten",
      teaser:
        "Nach der Winterpause: Stützkonstruktion zurückgebaut, Gefache ausgemauert und erster Lehmputz in der oberen Etage.",
      cover: [
        {
          data: fruehjahr02,
          alt: "Fachwerkwand mit offenen Gefachen während des Ausmauerns.",
        },
        {
          data: fruehjahr05,
          alt: "Helfende beim Ausmauern der Gefache an der Fassade.",
        },
        {
          data: fruehjahr04,
          alt: "Neue Lehmsteine werden ins neue Gefache eingesetzt.",
        },
      ],
      content: (
        <>
          <p>
            Nach einer langen Winterpause konnte am 18. April endlich wieder mit
            unseren Arbeitssamstagen am Diederichskotten begonnen werden. Mit
            viel Engagement der Helferinnen und Helfer wurde zunächst die noch
            vorhandene Stützkonstruktion aus dem Balkentausch zurückgebaut.
            Anschließend konnten die Arbeiten am Ausmauern der bislang offenen
            Gefache erfolgreich fortgesetzt werden.
          </p>
          <Gallery
            images={[
              {
                data: fruehjahr01,
                alt: "Beginn des Arbeitssamstags: Zunächst werden die Stützbalken abgebaut.",
              },
              {
                data: fruehjahr02,
                alt: "Fachwerkwand mit offenen Gefachen während des Ausmauerns.",
              },
              {
                data: fruehjahr05,
                alt: "Helfende beim Ausmauern der Gefache an der Fassade.",
              },
            ]}
          />
          <h4>Lehmputz im Innenraum</h4>
          <p>
            Auch im Inneren des Gebäudes ging es sichtbar voran: In der oberen
            Etage wurde der alte Putz entfernt und bereits eine erste Schicht
            neuer Lehmputz aufgetragen.
          </p>
          <Gallery
            images={[
              {
                data: fruehjahr03,
                alt: "In der oberen Etage wird der alte Putz von den Wänden entfernt.",
              },
              {
                data: fruehjahr04,
                alt: "Neue Lehmsteine werden ins neue Gefache eingesetzt.",
              },
            ]}
          />
          <p>
            Die Winterpause blieb jedoch keineswegs ungenutzt. Der Verein hat
            intensiv an der Vorbereitung eines Förderantrags gearbeitet, um die
            Finanzierung des nächsten Abschnitts der Sanierung zu sichern, und
            parallel alle notwendigen Angebote sowie Gutachten für die kommenden
            Bauabschnitte eingeholt. Damit sind wichtige Voraussetzungen
            geschaffen, um die nächsten Schritte planmäßig angehen zu können.
          </p>
        </>
      ),
    },
    {
      id: "2025-11-17-lions-club",
      date: "2025-11-17",
      title: "Unterstützung durch Lions Club Remscheid",
      teaser:
        "Ein Gerüst steht am Kotten: Die Zimmerei Zultner tauscht morsche Balken am Giebel, finanziert durch den Büchermarkt des Lions Club.",
      cover: [{ data: kottengeruest, alt: "Der Kotten ist eingerüstet." }],
      content: (
        <>
          <p>
            Aktuell wurde ein Gerüst um den Kotten gebaut, damit die Firma
            Zultner die Arbeiten am Giebel durchführen kann. Dort werden morsche
            Balken ausgetauscht und die Fassade wird weiter saniert.
          </p>
          <p>
            Die nachfolgenden Arbeiten und das benötigte Material werden durch
            eine großzügige Spende des Büchermarktes des Lions Club Remscheid
            finanziert. Der Büchermarkt findet vom 26. bis 29. November im Allee
            Center statt. Wir danken dem Lions Club Remscheid herzlich für diese
            wichtige Unterstützung bei der Sanierung unseres denkmalgeschützten
            Kottens.
          </p>
          <Gallery
            images={[
              { data: kottengeruest, alt: "Der Kotten ist eingerüstet." },
            ]}
            className="max-w-xl"
          />
        </>
      ),
    },
    {
      id: "2025-07-01-erste-jahreshaelfte",
      date: "2025-07-01",
      title: "Baufortschritt erste Jahreshälfte 2025",
      teaser:
        "Strohmatten und Lehm im Innenraum, die erste Putzschicht außen und ein aufgeräumtes Grundstück.",
      cover: [
        {
          data: aussen01,
          alt: "Die erste Putzschicht wird auf die Lehmsteine angebracht.",
        },
        {
          data: innen02,
          alt: "Lehmputz wird mit Druck auf die Wände gespritzt.",
        },
        { data: innen04, alt: "Erste Wand ist vollständig mit Lehm verputzt." },
      ],
      content: (
        <>
          <p>
            In diesem Jahr haben wir an einigen Arbeitswochenenden wieder viel
            an unserem Kotten geschafft. Im Innenraum wurde fleißig angefangen,
            die Wände mit Strohmatten und Lehm zu versehen, außen wurde
            angefangen zu verputzen und im Häuschen wurden die Wände gestrichen
            und alles geputzt.
          </p>
          <h4>Außen verputzen</h4>
          <p>
            Nachdem die Lehmsteine in die Fassade gebracht wurden, konnte die
            erste Putzschicht angebracht werden.
          </p>
          <Gallery
            images={[
              {
                data: aussen01,
                alt: "Die erste Putzschicht wird auf die Lehmsteine angebracht.",
              },
              {
                data: aussen02,
                alt: "Weitere Putzschichten werden auf die Lehmsteine angebracht.",
              },
              {
                data: aussen03,
                alt: "Weitere Putzschichten werden auf die Lehmsteine angebracht.",
              },
              {
                data: aussen04,
                alt: "Weitere Putzschichten werden auf die Lehmsteine angebracht.",
              },
            ]}
          />
          <h4>Innenraum</h4>
          <p>
            Im Innenraum wurde fleißig angefangen, die Wände mit Strohmatten und
            Lehm zu versehen.
          </p>
          <Gallery
            images={[
              {
                data: innen01,
                alt: "Strohmatten werden über die Wände gelegt.",
              },
              {
                data: innen02,
                alt: "Lehmputz wird mit Druck auf die Wände gespritzt.",
              },
              { data: innen03, alt: "Neuer Lehmputz wird angerührt." },
              {
                data: innen04,
                alt: "Erste Wand ist vollständig mit Lehm verputzt.",
              },
            ]}
          />
          <h4>Weitere Arbeiten</h4>
          <p>
            Neben den Arbeiten an den Gefachen müssen auch noch das Grundstück
            aufgeräumt und der Schutt weggebracht werden.
          </p>
          <Gallery
            images={[
              { data: anderes01, alt: "Schutt wird in den Hänger verladen." },
              { data: anderes02, alt: "Das Grundstück wird aufgeräumt." },
            ]}
          />
          <p>
            Die Arbeiten gehen langsam, aber stetig voran. Was hier auf den
            Bildern zu sehen ist, ist nur der Anfang. Es bleibt noch viel zu
            tun: Wir brauchen noch viel Unterstützung, müssen noch einige Balken
            tauschen, weitere Gefache neu ausmauern und verputzen, und so
            weiter.
          </p>
          <p>
            Wir freuen uns auf eure Unterstützung und hoffen, dass ihr mit uns
            gemeinsam den Kotten für die Zukunft saniert.
          </p>
        </>
      ),
    },
    {
      id: "2025-02-14-crowdfunding",
      date: "2025-02-14",
      title: "Crowdfunding und unser Plan für 2025",
      teaser:
        "Fassade verputzen, Elektrik erneuern, denkmalgerechte Fenster: rund 50.000 € Kosten und ein Crowdfunding bei der Volksbank.",
      cover: [
        { data: front20250214, alt: "Fassade des Kottens" },
        { data: verputzteWand20250214, alt: "Verputzte Wand" },
      ],
      content: (
        <>
          <p>
            Letztes Jahr konnten wir dank der zahlreichen Spenden und
            Fördergelder die Sanierung unseres Kottens starten. Im November ist
            es uns dank vieler tatkräftiger Helfer noch gelungen, die neuen
            Balken wieder mit Mauerwerk zu füllen. Doch auch dieses Jahr haben
            wir viel vor.
          </p>
          <p>
            Die Frontseite des Hauses muss von außen verputzt werden und die
            Elektroinstallation im Wohnraum wird komplett erneuert. Wir
            benötigen neue denkmalgerechte Fenster und die gesamte obere Etage
            muss saniert werden. Außerdem muss in Zusammenarbeit mit der Firma
            Zultner und der Denkmalbehörde Remscheid beschlossen werden, wie mit
            der Rückseite des Hauses weiter vorgegangen wird.
          </p>
          <p>Alles in allem erwarten wir Kosten von ca. 50.000&nbsp;€.</p>
          <p>
            Um all diese Projekte auch finanziell stemmen zu können und den
            Eigenanteil für eine weitere Förderung durch das Land NRW aufbringen
            zu können, haben wir die Winterpause genutzt und uns bei der{" "}
            <ExternalLink href={volksbankCrowdfundingLink20250214}>
              Volksbank im Bergischen Land auf ein Crowdfunding beworben
            </ExternalLink>
            .
          </p>
          <p>
            Wir haben ein Spendenziel von 5.000&nbsp;€ festgelegt. Es gilt das
            „Alles oder nichts“-Prinzip: Wenn die Summe nicht erreicht wird,
            bekommen die Spender ihr Geld zurück. Natürlich benötigen wir mehr
            als 5.000&nbsp;€, aber über die Plattform ist es möglich, auch über
            das Ziel hinaus zu spenden.
          </p>
          <p>
            Die Volksbank hat uns freundlicherweise mit einem Startbonus von
            1.000&nbsp;€ unterstützt. Aktuell fehlen also noch 4.000&nbsp;€, um
            das Spendenziel zu erreichen. Die Volksbank legt für jeden Spender
            (nicht für jede einzelne Spende) 5&nbsp;€ zusätzlich dazu. Damit das
            zählt, muss jeder Spender über einen eigenen Account spenden.
          </p>
          <p>
            Wir sind auf jede Unterstützung angewiesen, um den Kotten als unser
            Gruppenheim und Kulturdenkmal zu erhalten.
          </p>
          <Gallery
            images={[
              { data: front20250214, alt: "Fassade des Kottens" },
              { data: verputzteWand20250214, alt: "Verputzte Wand" },
            ]}
          />
        </>
      ),
    },
    {
      id: "2024-10-26-arbeitssamstag",
      date: "2024-10-26",
      title: "Arbeitssamstag im Oktober 2024",
      teaser:
        "Die ersten Gefache werden neu verfüllt, gemeinsam mit Interessierten und Vereinsmitgliedern.",
      cover: [
        { data: okt18, alt: "Wand zum Tor hin" },
        { data: okt13, alt: "Außenansicht" },
        { data: okt10, alt: "Außenwand der Küche" },
      ],
      content: (
        <>
          <p>
            An diesem Tag wurden die ersten Arbeiten an den Gefachen
            durchgeführt. Wir konnten zusammen mit Interessierten und
            Mitgliedern des Vereins einige Gefache neu verfüllen.
          </p>
          <Gallery
            images={[
              { data: okt18, alt: "Wand zum Tor hin" },
              { data: okt15, alt: "Wand zum Tor hin" },
              { data: okt16, alt: "Wand zum Tor hin" },
              { data: okt04, alt: "Wand zum Tor hin" },
              { data: okt03, alt: "Wand zum Eingang" },
              { data: okt08, alt: "Wand zum Tor hin" },
              { data: okt02, alt: "Wand zum Häuschen hin" },
              { data: okt13, alt: "Außenansicht" },
              { data: okt05, alt: "Wand zum Häuschen hin" },
              { data: okt06, alt: "Wand zum Tor hin" },
              { data: okt07, alt: "Wand zum Tor hin" },
              { data: okt10, alt: "Außenwand der Küche" },
              { data: okt09, alt: "Außenwand der Küche" },
              { data: okt01, alt: "Küchenfenster" },
            ]}
          />
        </>
      ),
    },
    {
      id: "2024-10-18-wohnhaus",
      date: "2024-10-18",
      title: "Wir benötigen Hilfe beim Wohnhaus!",
      teaser:
        "Marode Balken, eingestürzte Decken: Der Schaden am Wohnhaus wird auf 100.000 € geschätzt. Der Start der Sanierung.",
      cover: [
        { data: kottenAussenSpanplatte, alt: "Außenwand des Kottens" },
        { data: dachbodenNeueBalken, alt: "Neue Balken auf dem Dachboden" },
        { data: aussenbereichKueche1, alt: "Außenwand der Küche" },
      ],
      content: <Wohnhaus />,
    },
  ] satisfies Post[]
).toSorted((a, b) => b.date.localeCompare(a.date))

export function Wohnhaus() {
  return (
    <>
      <p>
        Das Wohnhaus wird heute vor allem genutzt, um Gruppenstunden und Fahrten
        in unseren Pfadfindergruppen auszurichten. Es hat einen großen Hauptraum
        mit Ofen, eine Küche, ein Badezimmer, zwei Schlafräume unterm Dach und
        einen Gewölbekeller.
      </p>
      <p>
        Leider wurde die Bausubstanz des Hauses über die letzten Jahre immer
        schlechter, sodass Decken eingestürzt, Wände abgebröckelt und vor allem
        Balken marode und instabil sind. Deshalb haben wir uns dazu entschieden,
        das Wohnhaus nun als unser nächstes Bauprojekt anzugehen und so zu
        sanieren, dass es wieder von unseren Vereinen sowie den
        Pfadfindergruppen genutzt werden kann.
      </p>
      <p>
        Wir haben damit begonnen, einen Großteil der Balken im Haus freizulegen,
        um mit einem Sachverständigen den Schaden begutachten zu können.
      </p>
      <p>
        Der Schaden ist immens. Nach erster Schätzung beläuft er sich auf{" "}
        <strong>100.000&nbsp;€.</strong> Da dies unser Budget bei weitem
        überschreitet, sind wir auf Hilfe angewiesen.
      </p>
      <p>
        In einem ersten Schritt haben wir uns an die Stadt Remscheid gewandt und
        einen Förderantrag über 40.000&nbsp;€ beim Land NRW eingereicht. Der
        Anteil der Stadt wurde uns vor wenigen Tagen in Höhe von 4.000&nbsp;€
        zugesichert. Auch das Land hat uns über den Heimatfond mit 23.500&nbsp;€
        unterstützt. Den verbleibenden Eigenanteil von 12.500&nbsp;€ konnten wir
        dank einer Spende der Stadtsparkasse Remscheid in Höhe von 5.000&nbsp;€
        aus eigenen Mitteln aufbringen.
      </p>
      <p>
        Der erste Schritt ist getan: Im Sommer 2024 konnten wir die Zimmerei
        Zultner aus Hückeswagen damit beauftragen, die Balken der ersten Hälfte
        des Wohnhauses auszutauschen. Jetzt sind wir gerade dabei, die neuen
        Gefache in Eigenleistung auszumauern.
      </p>
      <p className="font-bold">Doch jetzt ist die Kasse leer!</p>
      <Gallery
        images={[
          { data: kottenAussenSpanplatte, alt: "Außenwand des Kottens" },
          {
            data: dachbodenSchlafbereich,
            alt: "Blick in den alten Schlafbereich, wo nun ein neuer Boden benötigt wird",
          },
          { data: dachbodenNeueBalken, alt: "Neue Balken auf dem Dachboden" },
          { data: aussenbereichKueche1, alt: "Außenwand der Küche" },
          { data: aussenbereichKueche2, alt: "Außenwand der Küche" },
        ]}
      />
      <p>
        Wie auf den Bildern zu erkennen ist, wurde im Jahr 2024 bereits viel
        erreicht und renoviert. Doch es gibt noch viel zu tun. Wir benötigen
        finanzielle Unterstützung, damit wir uns auch im nächsten Jahr weiterhin
        professionelle Hilfe und Material leisten können, um die notwendigen
        Arbeiten durchzuführen.
      </p>
      <Spenden />
    </>
  )
}
