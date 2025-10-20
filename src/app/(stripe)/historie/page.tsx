import { HeroSmallImage } from "@/components/start/hero"
import { Container, Text, Timeline, VStack } from "@chakra-ui/react"
import { Metadata } from "next"
import {
  LuBuilding2,
  LuCalendarCheck,
  LuHammer,
  LuHandshake,
  LuHeart,
  LuPaintbrush,
  LuUsers,
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
            Die bewegte Geschichte des Diederichskottens - von einem
            historischen Schleifkotten zu einem lebendigen Ort der Jugendarbeit.
          </Text>

          <Timeline.Root size="lg" variant="outline" maxW="4xl" w="full">
            <Timeline.Item>
              <Timeline.Content width="auto">
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

            <Timeline.Item>
              <Timeline.Content width="auto">
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
                    Acht Pfadfinder schließen sich zu einem Verein zusammen, um
                    den Kotten zu erwerben und zu erhalten. Zweck:{" "}
                    <em>
                      &quot;Erwerb und die Erhaltung des Grundstücks
                      Diederichskotten zum Zwecke der Bereitstellung des
                      Gebäudes und des Grundstückes für Pfadfinder im Besonderen
                      und für Jugendarbeit&quot;
                    </em>
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content width="auto">
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
                    abbezahlt.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content width="auto">
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
                    Der &quot;Förderverein der Pfadfinder im Hammertal
                    e.V.&quot; wird gegründet und vom Finanzamt Remscheid als
                    gemeinnützig anerkannt. Dies ermöglicht es Unterstützern,
                    Spendenbescheinigungen zu erhalten.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content width="auto">
                <Timeline.Title whiteSpace="nowrap" fontWeight="semibold">
                  Sommer 2024
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.500" color="white">
                  <LuHammer />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Beginn der großen Sanierung</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Mit Unterstützung des Landes NRW (23.500 €), der Stadt
                    Remscheid (4.000 €) und der Stadtsparkasse Remscheid (5.000
                    €) wird die Zimmerei Zultner beauftragt, die maroden Balken
                    der ersten Haushälfte auszutauschen. Die neuen Gefache
                    werden in Eigenleistung ausgemauert.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content width="auto">
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
                <Timeline.Title>Spendenkampagne</Timeline.Title>
                <Timeline.Description>
                  <Text mt={2}>
                    Nach dem ersten Bauabschnitt ist die Kasse leer. Eine
                    PayPal-Spendenkampagne wird gestartet, um die weiteren
                    Sanierungsarbeiten zu finanzieren. Der Schaden beläuft sich
                    insgesamt auf ca. 100.000 €.
                  </Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content width="auto">
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

            <Timeline.Item>
              <Timeline.Content width="auto">
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
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        </VStack>
      </Container>
    </>
  )
}
