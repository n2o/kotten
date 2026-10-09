import { ExternalLink } from "@/components/external-link"
import { formatDate } from "@/lib/utils"
import rga from "@/images/logos/rga.webp"
import { ExternalLinkIcon } from "lucide-react"
import Image from "next/image"

const articles = [
  {
    title:
      "Sanierung des Diederichskotten: „Wer kann von sich sagen, dass er mal selbst ein Haus wiederaufgebaut hat?“",
    url: "https://www.rga.de/lokales/remscheid/remscheid-pfadfinder-sanieren-den-denkmalgeschuetzten-diederichskotten-TB6OGUENYNG2TEVTRLPZDEX5SU.html",
    teaser:
      "Dem uralten Fachwerkgebäude mit spannender Historie droht der Verfall. Seine Besitzer sorgen mit Spenden, Fördermitteln und viel Eigenleistung für dessen Erhalt.",
    date: "2024-10-31",
  },
  {
    title:
      "Maurer aufgepasst! Wer möchte beim Ausbau des Diederichskotten helfen?",
    url: "https://www.rga.de/lokales/remscheid/maurer-aufgepasst-wer-moechte-beim-ausbau-des-diederichskotten-helfen-AK4HTNAIG5ERLMKZDS55VL5RKQ.html",
    teaser:
      "In den uralten Schleifkotten kehrt nach jahrelangem Sanierungsstau wieder Leben ein. Viele helfende Hände sorgen dafür, dass die Vorarbeit des Zimmermanns nun vollendet wird.",
    date: "2024-10-22",
  },
]

export function Articles() {
  return (
    <ul className="fachwerk max-w-5xl">
      {articles.map((article) => (
        <li key={article.url} className="flex flex-col gap-2 p-5 md:p-6">
          <div className="flex items-center gap-3 text-sm text-stein">
            <Image
              src={rga}
              alt="Remscheider General-Anzeiger"
              width={40}
              height={22}
            />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
          <ExternalLink
            href={article.url}
            className="font-semibold text-schiefer underline decoration-stein/40 hover:text-lade hover:decoration-lade"
          >
            {article.title}
            <ExternalLinkIcon
              className="ml-1 inline size-4 align-[-2px]"
              aria-hidden
            />
          </ExternalLink>
          <p className="max-w-[68ch] text-stein">{article.teaser}</p>
        </li>
      ))}
    </ul>
  )
}
