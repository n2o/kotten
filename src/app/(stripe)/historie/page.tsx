import { HeroSmallImage } from "@/components/start/hero"
import { Container, Em, Text, Timeline, VStack } from "@chakra-ui/react"
import { Metadata } from "next"
import {
  LuBuilding2,
  LuCalendarCheck,
  LuCoins,
  LuFlame,
  LuHammer,
  LuHandshake,
  LuHeart,
  LuHouse,
  LuLandmark,
  LuPaintbrush,
  LuScrollText,
  LuShield,
  LuUsers,
  LuWaves,
} from "react-icons/lu"

export const metadata: Metadata = {
  title: "Historie",
}

export default function Page() {
  return (
    <>
      <HeroSmallImage title="Historie" />
      <Container>
        <VStack mt={8} mb={12} gap={6}>
          <Text fontSize="lg" textAlign="center" maxW="3xl">
            Vom Schleifkotten zur Pfadfinderstätte - Eine Reise durch rund 400
            Jahre Geschichte des Diederichskottens.
          </Text>

          <Timeline.Root size="lg" variant="outline" maxW="4xl" w="full">
            {/* Erste Erwähnung */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  1629
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuScrollText />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Erste urkundliche Erwähnung</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Der Kotten (damals noch <Em>Hens-Jans-Kotten</Em>) findet
                    seine erste Erwähnung in historischen Schriftstücken. Zu
                    dieser Zeit wurde er als Schleifmühle genutzt.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Namensgebung */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  1780
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuLandmark />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Namensgebung Diederichskotten</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Der Kotten erhält seinen heutigen Namen{" "}
                    <Em>Diederichskotten</Em>. Das Gebäude diente weiterhin zum
                    Schleifen von Stahl und Eisenwaren.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Bau des Wohnhauses */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  1852
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuHouse />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Bau des heutigen Wohnhauses</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Das heutige Wohnhaus wird errichtet. 1854 wohnten 14
                    Personen im Gebäude: Der Schleifer, seine Ehefrau und
                    Kinder, Lehrling und Knecht - in dieser Zeit durchaus
                    üblich, da Kost und Logis vom Herrn gestellt wurden.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Verschiedene Nutzungen */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  19. - 20. Jh.
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuCoins />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  Vielfältige Nutzung als Werkstatt
                </Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Im Laufe der Jahrhunderte wurde der Kotten für
                    verschiedenste handwerkliche Zwecke genutzt: Produktion von
                    Feilen, Herstellung von Walkstoffen, Schleifen von Stahl und
                    Eisenwaren sowie Drechselei.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Beginn Pfadfindernutzung */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  1980er Jahre
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuUsers />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Beginn der Pfadfindernutzung</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Der Diederichskotten wird erstmals von Remscheider
                    Pfadfindern genutzt. Ein Pfadfinder hatte den Kotten privat
                    von der Stadt übernommen und ihn der Gruppe zur Verfügung
                    gestellt.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Vereinsgründung */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  März 1990
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuHandshake />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Gründung Diederichskotten e.V.</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Aufgrund eines finanziellen Engpasses schließen sich acht
                    Pfadfinder zu einem Verein zusammen, um den Kotten zu
                    erwerben und zu erhalten. Satzungszweck:{" "}
                    <Em>
                      &quot;Erwerb und die Erhaltung des Grundstücks
                      Diederichskotten zum Zwecke der Bereitstellung des
                      Gebäudes und des Grundstückes für Pfadfinder im Besonderen
                      und für Jugendarbeit&quot;
                    </Em>
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Jahre des Engagements */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  1990 - 2010er
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuHeart />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Jahre des Engagements</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Die Vereinsmitglieder leisten jeden Monat einen Beitrag von
                    100 DM sowie weitere Sonderzahlungen, um Kredit und laufende
                    Kosten zu stemmen. Nach einigen Jahren sind die Kredite
                    abbezahlt und die monatlichen Beiträge können gesenkt
                    werden.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Schuppen Neuaufbau */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  2012
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuHammer />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Neuaufbau des Schuppens</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Aufgrund der Einsturzgefahr des alten Hühnerstalls wird mit
                    dem Neuaufbau begonnen. In Eigenregie entsteht eine
                    Außenküche für Pfadfindergruppen inklusive zwei WCs.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Förderverein */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  November 2012
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuBuilding2 />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Gründung des Fördervereins</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Der <Em>Förderverein der Pfadfinder im Hammertal e.V.</Em>{" "}
                    wird gegründet und vom Finanzamt Remscheid als gemeinnützig
                    anerkannt. Dies ermöglicht es Unterstützern,
                    Spendenbescheinigungen zu erhalten. Aktuell hat der
                    Förderverein 12 Mitglieder.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Hochwasser */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  2021
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuWaves />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Hochwasserkatastrophe</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Das verheerende Hochwasser trifft auch den Diederichskotten
                    und wirft das Projekt um viele Arbeitsstunden zurück. Die
                    Aufräum- und Reparaturarbeiten beginnen.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Denkmalschutz */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  Seit Jahren
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuShield />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Unter Denkmalschutz</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Der Diederichskotten steht unter Denkmalschutz, was
                    besondere Anforderungen an Sanierungsarbeiten stellt.
                    Bestimmte Baumaßnahmen sind genehmigungspflichtig und
                    spezielle Materialien wie RAL-Farben oder Lehmbauweise
                    werden vorgeschrieben, um den historischen Charakter zu
                    erhalten.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Sanierung Wohnhaus */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  Sommer 2024
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuFlame />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Beginn der großen Sanierung</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Die Bausubstanz des Wohnhauses ist kritisch: Decken
                    eingestürzt, Wände abgebröckelt, Balken marode. Mit
                    Unterstützung des Landes NRW (23.500 €), der Stadt Remscheid
                    (4.000 €) und der Stadtsparkasse Remscheid (5.000 €) wird
                    die Zimmerei Zultner beauftragt, die maroden Balken
                    auszutauschen. Die Gefache werden in Eigenleistung
                    ausgemauert. Der Gesamtschaden beläuft sich auf ca. 100.000
                    €.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Spendenkampagne */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  Oktober 2024
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuCalendarCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>PayPal-Spendenkampagne</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Nach dem ersten Bauabschnitt ist die Kasse leer. Eine
                    PayPal-Spendenkampagne wird gestartet, um die weiteren
                    Sanierungsarbeiten zu finanzieren.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Crowdfunding */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  Februar 2025
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuUsers />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Crowdfunding-Kampagne</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Start einer Crowdfunding-Kampagne bei der Volksbank im
                    Bergischen Land mit einem Spendenziel von 5.000 €. Die
                    Volksbank unterstützt mit einem Startbonus von 1.000 € und
                    legt für jeden Spender weitere 5 € dazu. Ziel: Eigenanteil
                    für weitere Förderung durch das Land NRW aufbringen.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            {/* Laufende Arbeiten */}
            <Timeline.Item>
              <Timeline.Content width="140px" textAlign="right">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  2025
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuPaintbrush />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Laufende Sanierungsarbeiten</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Die Arbeiten gehen stetig voran: Außenwände werden verputzt,
                    Innenwände mit Strohmatten und Lehm versehen, das Grundstück
                    wird aufgeräumt. Geplant sind noch: Elektroinstallation,
                    neue denkmalgerechte Fenster, Sanierung der oberen Etage.
                    Erwartete Kosten für 2025: ca. 50.000 €.
                  </Text>
                  <Text mt={4} fontWeight="semibold">
                    Der Verein hat derzeit 15 Mitglieder, die sich einmal
                    monatlich beim &quot;Arbeitssamstag&quot; engagieren, um
                    Grundstück und Gebäude in einem guten Zustand zu halten.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        </VStack>
      </Container>
    </>
  )
}
