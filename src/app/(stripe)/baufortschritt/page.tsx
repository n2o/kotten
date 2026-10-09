import { PageHeader } from "@/components/page-header"
import { PostArticle, Staender, StaenderItem } from "@/components/post"
import { posts } from "@/content/baufortschritt"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Baufortschritt",
  description:
    "Chronik der Sanierung des Diederichskottens: alle Arbeitssamstage mit Fotos, neueste zuerst.",
}

const years = [...new Set(posts.map((post) => post.date.slice(0, 4)))]

export default function Page() {
  return (
    <>
      <PageHeader title="Baufortschritt">
        <p>
          Immer wieder samstags sanieren Pfadfinder, Vereinsmitglieder und
          Freiwillige das Wohnhaus des Kottens. Hier halten wir fest, was
          geschafft wurde, neueste Einträge zuerst.
        </p>
      </PageHeader>

      <nav
        aria-label="Jahre"
        className="sticky top-0 z-10 border-b-[length:var(--balken)] border-schiefer bg-kalk"
      >
        <ul className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 md:px-6">
          {years.map((year) => (
            <li key={year}>
              <a
                href={`#jahr-${year}`}
                className="block px-3 py-3 font-semibold tabular-nums hover:text-lade hover:underline"
              >
                {year}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        {years.map((year) => (
          <section
            key={year}
            id={`jahr-${year}`}
            aria-labelledby={`jahr-${year}-titel`}
          >
            <h2
              id={`jahr-${year}-titel`}
              className="inline-block bg-schiefer px-4 py-1 text-3xl text-kalk tabular-nums md:text-4xl"
            >
              {year}
            </h2>
            <Staender>
              {posts
                .filter((post) => post.date.startsWith(year))
                .map((post) => (
                  <StaenderItem key={post.id} latest={post === posts[0]}>
                    <PostArticle post={post} latest={post === posts[0]} />
                  </StaenderItem>
                ))}
            </Staender>
          </section>
        ))}
      </div>
    </>
  )
}
