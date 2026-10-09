import { ExternalLink } from "@/components/external-link"
import { Logo } from "@/components/logo"
import { PostTeaser, Staender, StaenderItem } from "@/components/post"
import { Articles } from "@/components/rga"
import { Spenden } from "@/components/spenden"
import { Button } from "@/components/ui/button"
import { posts } from "@/content/baufortschritt"
import { formatDate } from "@/lib/utils"
import kotten from "@/images/kotten1.webp"
import { paypalDonationLink } from "@/lib/links"
import { ArrowRightIcon, HeartHandshakeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const latest = posts[0]

export default function Page() {
  return (
    <>
      <section
        aria-labelledby="titel"
        className="fachwerk mx-auto max-w-[1600px] lg:grid-cols-12"
      >
        <div className="relative min-h-72 md:min-h-[28rem] lg:col-span-7 lg:min-h-[34rem]">
          <Image
            src={kotten}
            alt="Das Wohnhaus des Diederichskottens im Hammertal: weißes Fachwerk mit schwarzen Balken und grüner Kellertür, umgeben von Wald."
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 p-6 lg:col-span-5 md:p-10">
          <h1
            id="titel"
            className="text-[clamp(2.75rem,4.8vw,5.5rem)] [font-stretch:75%]"
          >
            Diederichskotten
          </h1>
          <p className="text-xl leading-snug">
            Ein Stück Bergische Geschichte und bündische Heimat im Hammertal.
            Unterstützen Sie uns bei den Sanierungen und erhalten Sie den Kotten
            für die Zukunft.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <ExternalLink href={paypalDonationLink}>
                <HeartHandshakeIcon />
                Jetzt spenden
              </ExternalLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/baufortschritt">Zum Baufortschritt</Link>
            </Button>
          </div>
        </div>
        <dl className="p-5 md:p-6 lg:col-span-4">
          <dt className="text-stein">Erste urkundliche Erwähnung</dt>
          <dd className="display text-4xl tabular-nums">1629</dd>
        </dl>
        <dl className="p-5 md:p-6 lg:col-span-4">
          <dt className="text-stein">Verein zum Erhalt gegründet</dt>
          <dd className="display text-4xl tabular-nums">1990</dd>
        </dl>
        <dl className="p-5 md:p-6 lg:col-span-4">
          <dt className="text-stein">Letzter Arbeitseinsatz</dt>
          <dd className="display text-4xl">
            <Link
              href={`/baufortschritt#${latest.id}`}
              className="text-lade underline decoration-2 underline-offset-4 hover:text-lade-tief"
            >
              {formatDate(latest.date)}
            </Link>
          </dd>
        </dl>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <section
          aria-labelledby="willkommen"
          className="mt-16 grid gap-8 md:mt-24 md:grid-cols-[1fr_auto]"
        >
          <div className="lesetext">
            <h2 id="willkommen" className="text-3xl md:text-4xl">
              Willkommen beim Diederichskotten
            </h2>
            <p className="text-lg">
              Der Diederichskotten ist ein denkmalgeschütztes Gebäude im
              Hammertal, das seit den 1980er Jahren von den Remscheider
              Pfadfindern genutzt wird. Im Jahr 1990 wurde ein Verein gegründet,
              um das Gebäude zu erhalten und als Ort für bündische
              Veranstaltungen zu nutzen und so den Gruppen des Deutschen
              Pfadfinderbundes in Remscheid eine Heimat zu bieten.
            </p>
          </div>
          <Logo width={150} height={150} className="hidden md:block" />
        </section>

        <section aria-labelledby="baufortschritt" className="mt-16 md:mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-[60ch]">
              <h2 id="baufortschritt" className="text-3xl md:text-4xl">
                Baufortschritt
              </h2>
              <p className="mt-3 text-lg">
                Bei Arbeitseinsätzen am Wochenende wird immer wieder am
                Wohnhaus gearbeitet: Balken freilegen, Gefache mit Lehmsteinen
                ausmauern, verputzen.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/baufortschritt">
                Alle Einträge
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
          <div className="mt-6 max-w-5xl">
            <Staender>
              {posts.slice(0, 2).map((post, idx) => (
                <StaenderItem key={post.id} latest={idx === 0}>
                  <PostTeaser post={post} latest={idx === 0} />
                </StaenderItem>
              ))}
            </Staender>
          </div>
        </section>

        <section aria-labelledby="unterstuetzen" className="mt-16 md:mt-24">
          <h2 id="unterstuetzen" className="text-3xl md:text-4xl">
            Unterstützen
          </h2>
          <p className="mt-3 max-w-[60ch] text-lg">
            Der Schaden am Wohnhaus wurde auf rund 100.000&nbsp;€ geschätzt.
            Förderungen von Land, Stadt und Sponsoren decken einen Teil, den
            Rest stemmen wir mit Spenden und Eigenleistung.
          </p>
          <Spenden />
        </section>

        <section aria-labelledby="presse" className="mt-16 md:mt-24">
          <h2 id="presse" className="text-3xl md:text-4xl">
            In der Presse
          </h2>
          <div className="mt-6">
            <Articles />
          </div>
        </section>
      </div>
    </>
  )
}
