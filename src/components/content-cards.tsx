import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Text,
} from "@chakra-ui/react"

export function Uebernahme(props: CardProps) {
  return (
    <Card {...props}>
      <CardHeader pb={0}>
        <Heading fontSize="2xl" lineHeight="2rem">
          Übernahme des Kottens durch uns
        </Heading>
      </CardHeader>
      <CardBody>
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
      </CardBody>
    </Card>
  )
}

export function Verein(props: CardProps) {
  return (
    <Card {...props}>
      <CardHeader pb={0}>
        <Heading fontSize="2xl" lineHeight="2rem">
          Förderverein der Pfadfinder im Hammertal e.V.
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          Für die Unterhaltung eines denkmalgeschützten Gebäudes wie den
          Diederichskotten und die Umsetzung neuer Maßnahmen am Gelände (z.B.
          das &quot;Projekt Schuppen&quot;) benötigt man Ideen, viele Leute,
          deren Zeit und natürlich auch ausreichend finanzielle Mittel. Wir
          können uns glücklich schätzen, dass wir mal mehr und mal weniger über
          all' diese Dinge verfügen: so konnten wir nicht nur durch den
          unermüdlichen Einsatz aller Mitglieder des Diederichskotten e.V.,
          sondern auch aufgrund der vielen fleißigen Helfer des Deutschen
          Pfadfinderbundes in Remscheid viele kleine und auch große Projekte am
          Haus und Gelände umsetzen. Dabei waren und sind wir immer mall wieder
          auch auf die finanzielle und / oder materielle Hilfe von Freunden und
          Förderern angewiesen. Da wir jedoch auch wissen, dass es für diese
          immer schwieriger wird, uns ohne entsprechende Spendenbescheinigung zu
          unterstützen, haben wir im November 2012 den Förderverein der
          Pfadfinder im Hammertal e.V. Förderverein der Pfadfinder im Hammertal
          e.V. gegründet und durch Bescheid des Finanzamtes Remscheid als
          gemeinnützig anerkennen lassen. Satzungsmäßiger Zweck des Vereins ist
          die Beschaffung von Mitteln zur Förderung der Erziehung durch den
          Deutschen Pfadfinderbund e.V. insbesondere der Pfadfinder / innen im
          Diederichskotten. So unterstützt dieser die Remscheider Pfadfinder /
          innen und den Diederichskotten e.V. z.B. im Rahmen der
          Industriedenkmalpflege finanziell, materiell und organisatorisch bei
          der Beschaffung von Materialien jeglicher Art für die Instandsetzung
          und Erhaltung unseres Gruppenheims. Zurzeit hat der Förderverein zwölf
          Mitglieder.
        </Text>
      </CardBody>
    </Card>
  )
}
