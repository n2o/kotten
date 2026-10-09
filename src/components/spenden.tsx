import { ExternalLink } from "@/components/external-link"
import { Button } from "@/components/ui/button"
import heimatNrw from "@/images/heimat-nrw.svg"
import paypalQrCode from "@/images/paypal-code.svg"
import { paypalDonationLink } from "@/lib/links"
import { HeartHandshakeIcon } from "lucide-react"
import Image from "next/image"

export function Spenden() {
  return (
    <div className="fachwerk my-8 sm:grid-cols-[auto_1fr]">
      <div className="grid place-items-center p-6">
        <Image
          src={paypalQrCode}
          alt="QR-Code zur PayPal-Spendenseite"
          width={160}
          height={160}
        />
      </div>
      <div className="p-6">
        <p className="display text-2xl">
          Helfen Sie mit, den Kotten zu erhalten.
        </p>
        <p className="mt-2">
          Spenden sind über PayPal möglich. Für eine Spendenbescheinigung
          schreiben Sie uns an{" "}
          <a
            href="mailto:info@diederichskotten.de"
            className="text-lade underline hover:text-lade-tief"
          >
            info@diederichskotten.de
          </a>
          .
        </p>
        <Button asChild size="lg" className="mt-5">
          <ExternalLink href={paypalDonationLink}>
            <HeartHandshakeIcon />
            Mit PayPal spenden
          </ExternalLink>
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-4 p-6 sm:col-span-2">
        <Image src={heimatNrw} alt="Heimat NRW" className="h-auto w-56" />
        <p className="text-sm text-stein">
          Gefördert vom Land Nordrhein-Westfalen.
        </p>
      </div>
    </div>
  )
}
