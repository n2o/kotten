import { Post } from "@/content/baufortschritt"
import { cn, formatDate } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

/** Vollständiger Eintrag auf /baufortschritt */
export function PostArticle({
  post,
  latest = false,
}: {
  post: Post
  latest?: boolean
}) {
  return (
    <article
      id={post.id}
      aria-labelledby={`${post.id}-titel`}
      className="fachwerk"
    >
      <PostHeader post={post} latest={latest} titleId={`${post.id}-titel`} />
      <div className="lesetext max-w-none px-4 py-5 md:px-8 md:py-6 [&>p]:max-w-[68ch]">
        {post.content}
      </div>
    </article>
  )
}

/** Senkrechter Ständer; Riegel führen zu jedem Eintrag */
export function Staender({ children }: { children: ReactNode }) {
  return (
    <ol className="relative pb-10 md:ml-8 md:border-l-[length:var(--balken)] md:border-schiefer">
      {children}
    </ol>
  )
}

export function StaenderItem({
  latest = false,
  children,
}: {
  latest?: boolean
  children: ReactNode
}) {
  return (
    <li className="relative pt-8 md:pt-10 md:pl-12">
      <span
        aria-hidden
        className={cn(
          "riegel absolute top-[4.25rem] left-0 hidden h-[var(--balken)] w-12 md:block",
          latest ? "bg-lade" : "bg-schiefer",
        )}
      />
      {children}
    </li>
  )
}

function PostHeader({
  post,
  latest,
  titleId,
  href,
}: {
  post: Post
  latest: boolean
  titleId?: string
  href?: string
}) {
  return (
    <header className={cn("px-4 py-4 md:px-8", latest && "bg-lade text-white")}>
      <time
        dateTime={post.date}
        className={cn("font-semibold", latest ? "text-white/85" : "text-stein")}
      >
        {formatDate(post.date)}
      </time>
      <h3 id={titleId} className="mt-1 text-2xl md:text-3xl">
        {href ? (
          <Link href={href} className="hover:underline">
            {post.title}
          </Link>
        ) : (
          post.title
        )}
      </h3>
    </header>
  )
}

/** Vorschau auf der Startseite */
export function PostTeaser({
  post,
  latest = false,
}: {
  post: Post
  latest?: boolean
}) {
  const href = `/baufortschritt#${post.id}`
  return (
    <article
      className={cn(
        "fachwerk",
        ["grid-cols-1", "grid-cols-2", "grid-cols-3"][post.cover.length - 1],
      )}
    >
      <div className="col-span-full">
        <PostHeader post={post} latest={latest} href={href} />
      </div>
      {post.cover.map((image) => (
        <div key={image.data.src} className="relative aspect-[4/3]">
          <Image
            src={image.data}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 320px, 33vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="col-span-full px-5 py-4 md:px-8">
        <p className="max-w-[68ch]">{post.teaser}</p>
        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-1 font-semibold text-lade underline underline-offset-4 hover:text-lade-tief"
          aria-label={`Weiterlesen: ${post.title}`}
        >
          Weiterlesen
          <ArrowRightIcon className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
