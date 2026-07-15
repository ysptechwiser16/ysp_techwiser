import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { resolveContentType } from '@/lib/content/resolveContentType'
import { getRouteForContentType } from '@/lib/content/routeMap'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Smartphones | YSP Techwiser',
  description:
    'Premium smartphone reviews, camera comparisons, battery tests, and buying guides.',
  openGraph: {
    title: 'Smartphones | YSP Techwiser',
    description:
      'Premium smartphone reviews, camera comparisons, battery tests, and buying guides.',
    type: 'website',
  },
}

type Story = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  type: string
  href: string
}

async function getSmartphoneStories(): Promise<Story[]> {
  await connectDB()

  const articles = await Article.find({
    status: 'published',
    category: 'Smartphones',
  })
    .sort({ featured: -1, createdAt: -1 })
    .limit(12)
    .lean()

  return articles.map((article: any) => {
    const type = resolveContentType(article.category, article.sourceType)
    return {
      _id: String(article._id),
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt ?? '',
      category: article.category,
      readTime: article.readTime ?? '5 min',
      type,
      href: getRouteForContentType(type, article.slug),
    }
  })
}

function GlassCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-[32px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  )
}

export default async function SmartphonesPage() {
  const stories = await getSmartphoneStories()

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_26%),rgba(255,255,255,0.05)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-cyan-500/12 blur-[120px]" />
            <div className="absolute right-[-8%] bottom-[-14%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="premium-kicker">Smartphones</div>
              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Premium phone reviews and comparisons.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Camera tests, battery testing, performance notes, and buying
                guidance for smartphone buyers.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/compare" className="premium-button">
                  Compare phones
                </Link>
                <Link href="/search" className="premium-button-ghost">
                  Search content
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-slate-300">
                  Camera-first picks
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-slate-300">
                  Battery testing
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-slate-300">
                  Value and flagship
                </span>
              </div>
            </div>

            <GlassCard className="p-6 md:p-8">
              <div className="premium-kicker">What you will find here</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                A focused smartphone section built for buyers.
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  'Camera reviews with real-world use cases.',
                  'Battery and charging notes that matter.',
                  'Performance and display impressions.',
                  'Buying advice that skips the fluff.',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        {stories.length > 0 ? (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <Link
                key={story.slug}
                href={story.href}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                  {story.category}
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white">
                  {story.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {story.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
                  <span>{story.readTime}</span>
                  <span>{story.type}</span>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <GlassCard className="p-6 md:p-8">
            <div className="premium-kicker">No smartphone stories yet</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              This section is ready for content.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Add published smartphone articles in MongoDB with category set to
              <span className="font-semibold text-white"> Smartphones</span>,
              and they will appear here automatically.
            </p>
          </GlassCard>
        )}
      </div>
    </main>
  )
}
