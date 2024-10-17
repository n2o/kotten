import ChakraImage from "@/components/chakra-image"
import { ContentCard } from "@/components/content-card"
import { ModalImage } from "@/components/modal-image"
import aussenbereichKueche1 from "@/images/2024/aussenbereich-kueche01.webp"
import aussenbereichKueche2 from "@/images/2024/aussenbereich-kueche02.webp"
import dachbodenNeueBalken from "@/images/2024/dachboden-neue-balken.webp"
import dachbodenSchlafbereich from "@/images/2024/dachboden-schlafbereich.webp"
import kottenAussenSpanplatte from "@/images/2024/kotten-aussen-spanplatte.webp"
import paypalQrCode from "@/images/paypal-code.svg"
import { paypalDonationLink } from "@/lib"
import {
  AspectRatio,
  Button,
  CardProps,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import { FaPaypal } from "react-icons/fa6"

export function Uebernahme(props: CardProps) {
  return (
    <ContentCard heading="Übernahme des Kottens durch uns" {...props}>
      <Text>
        Seit den 1980er Jahren wird der Kotten von Remscheider Pfadfindern
        genutzt. Einer von ihnen hatte den Kotten privat von der Stadt
        Übernommen und ihn der Gruppe zur Verfügung gestellt. Nach ein paar
        Jahren kam es zu einem finanziellen Engpass, weswegen sich die Gruppe
        etwas überlegen musste. Acht von ihnen schlossen sich im März 1990
        privat zu einem Verein zusammen. Zweck des Vereins war der{" "}
        <i>
          &quot;Erwerb und die Erhaltung des Grundstücks Diederichskotten zum
          Zwecke der Bereitstellung des Gebäudes und des Grundstückes für
          Pfadfinder im Besonderen und für Jugendarbeit&quot;
        </i>{" "}
        (Auszug aus der Satzung des Vereins). Viele Jahre bedeutete dies für die
        Vereinsmitglieder, jeden Monat einen Beitrag von 100 DM und weitere
        Sonderzahlungen zu leisten, damit sowohl der Kredit, als auch die
        laufenden Kosten, gestemmt werden konnten. Seit einigen Jahren sind nun
        die Kredite bezahlt und die monatlichen Beiträge konnten etwas gesenkt
        werden. Jetzt hat der Verein mit der Instandhaltung bzw. der Sanierung
        zu kämpfen. Dabei hilft ihm der &quot;Förderverein der Pfadfinder im
        Hammertal e.V.&quot;.
      </Text>
    </ContentCard>
  )
}

export function Verein(props: CardProps) {
  return (
    <ContentCard
      {...props}
      heading="Förderverein der Pfadfinder im Hammertal e.V."
    >
      <Text>
        Für die Unterhaltung eines denkmalgeschützten Gebäudes wie den
        Diederichskotten und die Umsetzung neuer Maßnahmen am Gelände (z.B. das
        &quot;Projekt Schuppen&quot;) benötigt man Ideen, viele Leute, deren
        Zeit und natürlich auch ausreichend finanzielle Mittel. Wir können uns
        glücklich schätzen, dass wir mal mehr und mal weniger über alle diese
        Dinge verfügen: so konnten wir nicht nur durch den unermüdlichen Einsatz
        aller Mitglieder des Diederichskotten e.V., sondern auch aufgrund der
        vielen fleißigen Helfer des{" "}
        <Link href="https://dpb-remscheid.de" target="_blank">
          Deutschen Pfadfinderbundes in Remscheid
        </Link>{" "}
        viele kleine und auch große Projekte am Haus und Gelände umsetzen. Dabei
        waren und sind wir immer mall wieder auch auf die finanzielle und / oder
        materielle Hilfe von Freunden und Förderern angewiesen. Da wir jedoch
        auch wissen, dass es für diese immer schwieriger wird, uns ohne
        entsprechende Spendenbescheinigung zu unterstützen, haben wir im
        November 2012 den &quot;Förderverein der Pfadfinder im Hammertal
        e.V.&quot; gegründet und durch Bescheid des Finanzamtes Remscheid als
        gemeinnützig anerkennen lassen. Satzungsmäßiger Zweck des Vereins ist
        die Beschaffung von Mitteln zur Förderung der Erziehung durch den
        Deutschen Pfadfinderbund e.V. insbesondere der Pfadfinder:innen im
        Diederichskotten. So unterstützt dieser die Remscheider Pfadfinder:innen
        und den Diederichskotten e.V. z.B. im Rahmen der Industriedenkmalpflege
        finanziell, materiell und organisatorisch bei der Beschaffung von
        Materialien jeglicher Art für die Instandsetzung und Erhaltung unseres
        Gruppenheims. Zurzeit hat der Förderverein zwölf Mitglieder.
      </Text>
    </ContentCard>
  )
}

export function Verwendung(props: CardProps) {
  return (
    <ContentCard heading="Wozu wird der Kotten heute genutzt?" {...props}>
      <Text>
        Heute bietet der Diederichskotten vor allem einen Rückzugsort für die
        Remscheider Pfadfindergruppen. Diese führen dort nachmittags
        Gruppenstunden durch oder kehren auf Fahrten und Lagern hier ein. Dazu
        machen sie es sich im Schleifkotten, und nach der Sanierung auch wieder
        im Wohnhaus gemütlich oder nutzen die große Wiese, um ihre Kohten und
        Jurten aufzuschlagen.
      </Text>
      <Text>
        Um Grundstück und Gebäude dafür in einem guten Zustand zu halten,
        engagieren sich die Mitglieder der Vereine einmal im Monat einen Tag
        lang beim sogenannten "Arbeitssamstag".
      </Text>
    </ContentCard>
  )
}

export function Grundstueck(props: CardProps) {
  return (
    <ContentCard heading="Das Grundstück" {...props}>
      <Text>
        Wenn ihr euch umschaut, seht ihr das wunderschöne Grundstück unseres
        Kottens.
      </Text>
      <Text>
        Hinter der Brücke liegt das Eingangstor, welches das Wappen der ersten
        hier ansässigen Pfadfindergruppe, dem Stamm Heinrich der Schwarze,
        zeigt. Betritt man das Grundstück, läuft man direkt auf das ehemals als
        Wohnhaus genutzte Hauptgebäude zu. Davor befindet sich das
        wiederaufgebaute Gebäude mit Wanderküche und WCs.
      </Text>
      <Text>
        Auf der rechten Seite liegt die alte Werkstatt mit den Überresten des
        alten Wasserrades und einem dazugehörigen Lagerraum. Hinter dem Gebäude
        stehen unsere Kotten-Bienen.
      </Text>
      <Text>
        Auf der linken Seite des Hauptgebäudes findet man eine große Wiese, die
        vor allem für Pfadfinderlager und Gruppenstunden genutzt wird
      </Text>
    </ContentCard>
  )
}

export function Wohnhaus(props: CardProps) {
  const images = [
    { data: kottenAussenSpanplatte, alt: "Außenwand des Kottens" },
    {
      data: dachbodenSchlafbereich,
      alt: "Blick in den alten Schlafbereich, wo nun ein neuer Boden benötigt wird",
    },
    { data: dachbodenNeueBalken, alt: "Neue Balken auf dem Dachboden" },
    { data: aussenbereichKueche1, alt: "Außenwand der Küche" },
    { data: aussenbereichKueche2, alt: "Außenwand der Küche" },
  ]

  return (
    <ContentCard heading="Wir benötigen Hilfe beim Wohnhaus!" {...props}>
      <Text>
        Das Wohnhaus wird heute vor allem genutzt, um Gruppenstunden und Fahrten
        in unseren Pfadfindergruppen auszurichten. Es hat einen großen Hauptraum
        mit Ofen, eine Küche, ein Badezimmer, zwei Schlafräume unterm Dach und
        einen Gewölbekeller.
      </Text>
      <Text>
        Leider wurde die Bausubstanz des Hauses über die letzten Jahre immer
        schlechter, sodass Decken eingestürzt, Wände abgebröckelt und vor allem
        Balken marode und instabil sind. Deshalb haben wir uns dazu entschieden,
        das Wohnhaus nun als unser nächstes Bauprojekt anzugehen und so zu
        sanieren, dass es wieder von unseren Vereinen sowie den
        Pfadfindergruppen genutzt werden kann.
      </Text>
      <Text>
        Wir haben damit begonnen einen Großteil der Balken im Haus freizulegen
        um mit einem Sachverständigen den Schaden begutachten zu können.
      </Text>
      <Text>
        Der Schaden ist immens. Nach erster Schätzung beläuft er sich auf über
        38.000 €. Da dies unser Budget bei weitem überschreitet, sind wir auf
        Hilfe angewiesen.
      </Text>
      <Text>
        In einem ersten Schritt haben wir uns an die Stadt Remscheid gewandt und
        einen Förderantrag gestellt, der uns vor wenigen Tagen in Höhe von
        4.000€ zugesichert wurde. Zurzeit warten wir noch auf eine Rückmeldung
        des Landes über die Möglichkeit zum Erhalt weiterer Fördermittel.
      </Text>
      <Text>
        Doch selbst bei einer positiven Rückmeldung wird zusätzlich ein
        Eigenanteil von mehr als 10.000 € benötigt, den wir durch Spenden zu
        bewerkstelligen hoffen.
      </Text>

      <SimpleGrid columns={4} gap={5}>
        {images.map((image, idx) => (
          <AspectRatio ratio={3 / 4} key={idx}>
            <ModalImage image={image.data} alt={image.alt} />
          </AspectRatio>
        ))}
      </SimpleGrid>
      <Text mt={4}>
        Wie auf den Bildern zu erkennen ist, wird und wurde im Jahr 2024 eine
        Menge erreicht und renoviert. Doch es gibt noch viel zu tun. Wir
        benötigen <strong>finanzielle Unterstützung</strong>, damit wir uns
        professionelle Hilfe holen können, um die notwendigen Arbeiten
        durchzuführen.
      </Text>

      <VStack mt={5}>
        <ChakraImage
          src={paypalQrCode}
          alt={"QR Code zur PayPal Kampagne"}
          width={200}
          height={200}
        />
        <Link href={paypalDonationLink} target="_blank">
          <Button leftIcon={<FaPaypal />} colorScheme="cyan">
            Jetzt unterstützen
          </Button>
        </Link>
      </VStack>
    </ContentCard>
  )
}
