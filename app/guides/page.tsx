import type { Metadata } from 'next'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Guide } from '@/models/Guide'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Guides | YSP Techwiser',
  description:
    'Buying guides, tutorials, comparisons, AI explainers, and practical technology walkthroughs.',
}

type GuideItem = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  difficulty: string
  readTime: string
  createdAt: string
}

async function getGuides(): Promise<GuideItem[]> {
  await connectDB()

  const guides = await Guide.find({ status: 'published' })
    .sort({ featured: -1, createdAt: -1 })
    .limit(24)
    .lean()

  return (guides as any[]).map((guide) => ({
    _id: String(guide._id),
    title: guide.title ?? 'Untitled guide',
    slug: guide.slug ?? '',
    excerpt:
      guide.excerpt ??
      'Step-by-step practical guide from YSP Techwiser.',
    category: guide.category ?? 'Guides',
    difficulty: guide.difficulty ?? 'Beginner',
    readTime: guide.readTime ?? '6 min read',
    createdAt: guide.createdAt
      ? new Date(guide.createdAt).toISOString()
      : '',
  }))
}

function formatDate(date: string) {
  if (!date) return 'Latest'

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export default async function GuidesPage() {
  const guides = await getGuides()
  const featured = guides[0]

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">

        <section className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl">

          <div className="grid gap-10 p-6 md:p-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">

            <div>

              <div className="premium-kicker">
                Guides & Tutorials
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                Learn technology with practical guides.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Beginner-friendly tutorials, buying guides, AI walkthroughs, setup tips, comparisons, and practical explanations for modern technology.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <Link href="/blog" className="premium-button">
                  Explore articles
                </Link>

                <Link href="/reviews" className="premium-button-ghost">
                  Read reviews
                </Link>

              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">

                  <div className="text-3xl font-semibold text-cyan-200">
                    {guides.length}
                  </div>

                  <div className="mt-2 text-sm text-slate-300">
                    Published guides
                  </div>

                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">

                  <div className="text-3xl font-semibold text-cyan-200">
                    AI
                  </div>

                  <div className="mt-2 text-sm text-slate-300">
                    Modern workflows
                  </div>

                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">

                  <div className="text-3xl font-semibold text-cyan-200">
                    Step
                  </div>

                  <div className="mt-2 text-sm text-slate-300">
                    Structured tutorials
                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-black/20 p-6">

              <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                Featured Guide
              </div>

              {featured ? (
                <div className="mt-4 space-y-4">

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">

                    <div className="flex items-center justify-between gap-3">

                      <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        {featured.category}
                      </div>

                      <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                        {featured.difficulty}
                      </div>

                    </div>

                    <h2 className="mt-3 text-xl font-semibold text-white">
                      {featured.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {featured.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">

                      <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        {formatDate(featured.createdAt)}
                      </span>

                      <span className="text-sm font-medium text-cyan-200">
                        {featured.readTime}
                      </span>

                    </div>

                  </div>

                  <div className="rounded-[24px] border border-cyan-400/15 bg-cyan-400/5 p-5">

                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                      Guide Philosophy
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      Every guide should feel practical, actionable, beginner-friendly, and optimized for mobile reading.
                    </p>

                  </div>

                </div>
              ) : (
                <div className="mt-4 rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
                  No guides published yet.
                </div>
              )}

            </div>

          </div>

        </section>

        <section className="flex items-end justify-between gap-4">

          <div>

            <div className="premium-kicker">
              Latest Guides
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Tutorials and practical walkthroughs
            </h2>

          </div>

          <div className="text-sm text-slate-400">
            {guides.length} items
          </div>

        </section>

        {guides.length > 0 ? (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

            {guides.map((guide) => (
              <Link
                key={guide.slug || guide._id}
                href={guide.slug ? `/guides/${guide.slug}` : '/guides'}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >

                <div className="flex items-center justify-between gap-3">

                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                    {guide.category}
                  </div>

                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                    {guide.difficulty}
                  </div>

                </div>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {guide.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {guide.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">

                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    {formatDate(guide.createdAt)}
                  </div>

                  <div className="text-sm font-medium text-cyan-200">
                    {guide.readTime}
                  </div>

                </div>

              </Link>
            ))}

          </section>
        ) : (
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">

            <h3 className="text-2xl font-semibold text-white">
              No guides available
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Add published guides from the admin dashboard to automatically populate this page.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">

              <Link href="/blog" className="premium-button">
                Explore articles
              </Link>

              <Link href="/" className="premium-button-ghost">
                Back to home
              </Link>

            </div>

          </section>
        )}

      </div>
    </main>
  )
}
