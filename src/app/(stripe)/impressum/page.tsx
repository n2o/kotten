import { ExternalLink } from "@/components/external-link"
import { PageHeader } from "@/components/page-header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum",
}

export default function Page() {
  return (
    <>
      <PageHeader title="Impressum" />
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <div className="lesetext">
          <p>
            Förderverein der Pfadfinder im Hammertal e.V.
            <br />
            Wilhelmstraße 64
            <br />
            42855 Remscheid
            <br />
            E-Mail:{" "}
            <a href="mailto:info@diederichskotten.de">info@diederichskotten.de</a>
          </p>
          <p>
            <strong>Vertreten durch:</strong>
            <br />
            Hanna Fetsch
          </p>

          <h2>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <p>
            Quelle:{" "}
            <ExternalLink href="https://www.e-recht24.de">
              https://www.e-recht24.de
            </ExternalLink>
          </p>
        </div>
      </div>
    </>
  )
}
