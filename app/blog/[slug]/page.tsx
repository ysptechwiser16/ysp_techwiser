import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, BookOpenText, CalendarDays, Clock3, Sparkles, Tag } from 'lucide-react'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type PageProps = {
  params: Promise<{ slug: string }>
}

type ArticleDetail = {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category?: string
  readTime?: string
  createdAt?: string
  updatedAt?: string
  featured?: boolean
}

async function getArticle(slug: string): Promise<ArticleDetail | null> {
  await connectDB()

  const article = await Article.findOne({
    slug,
    status: 'published',
  })
    .lean<any>()
    .exec()

  if (!article) return null

  return {
    _id: String(article._id),
    title: article.title ?? '',
    slug: article.slug ?? slug,
    excerpt: article.excerpt ?? '',
    content: article.content ?? '',
    category: article.category ?? 'Blog',
    readTime: article.readTime ?? '5 min read',
    createdAt: article.createdAt ? new Date(article.createdAt).toISOString() : '',
    updatedAt: article.updatedAt ? new Date(article.updatedAt).toISOString() : '',
    featured: Boolean(article.featured),
  }
}

function formatDate(value?: string) {
  if (!value) return 'Fresh post'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Fresh post'
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return {
      title: 'Blog | YSP Techwiser',
      description: 'Latest stories, guides, and reviews from YSP Techwiser.',
    }
  }

  return {
    title: `${article.title} | YSP Techwiser`,
    description: article.excerpt || `Read ${article.title} on YSP Techwiser.`,
    openGraph: {
      title: `${article.title} | YSP Techwiser`,
      description: article.excerpt || `Read ${article.title} on YSP Techwiser.`,
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) notFound()

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <section className="rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="premium-kicker flex items-center gap-2">
              <BookOpenText className="h-4 w-4" />
              Blog post
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-100">
              {article.category ?? 'Blog'}
            </span>

            {article.featured ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200">
                Featured
              </span>
            ) : null}
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            {article.excerpt || `Read ${article.title} on YSP Techwiser.`}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                <Tag className="h-4 w-4 text-cyan-200" />
                Category
              </div>
              <div className="mt-3 text-lg font-semibold text-white">
                {article.category ?? 'Blog'}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                <Clock3 className="h-4 w-4 text-cyan-200" />
                Read time
              </div>
              <div className="mt-3 text-lg font-semibold text-white">
                {article.readTime ?? '5 min read'}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                <CalendarDays className="h-4 w-4 text-cyan-200" />
                Published
              </div>
              <div className="mt-3 text-lg font-semibold text-white">
                {formatDate(article.createdAt)}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-8">
          <article className="whitespace-pre-wrap text-base leading-8 text-slate-200 md:text-lg">
            {article.content || 'This article is ready for full editorial content.'}
          </article>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Link href="/guides" className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition hover:border-cyan-400/20">
            <div className="flex items-center gap-2 text-sm font-medium text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Browse guides
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Explore practical tutorials and step-by-step technology walkthroughs.
            </p>
          </Link>

          <Link href="/reviews" className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition hover:border-cyan-400/20">
            <div className="flex items-center gap-2 text-sm font-medium text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Read reviews
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Check premium reviews for smartphones, laptops, and accessories.
            </p>
          </Link>

          <Link href="/search" className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition hover:border-cyan-400/20">
            <div className="flex items-center gap-2 text-sm font-medium text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Search more
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Find related stories, categories, and content across the site.
            </p>
          </Link>
        </section>
      </div>
    </main>
  )
}
