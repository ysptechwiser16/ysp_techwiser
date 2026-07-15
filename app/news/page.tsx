import type { Metadata } from 'next'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'News | YSP Techwiser',
  description: 'Premium tech news, launch coverage, platform updates, and industry stories.',
}

interface NewsStory {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  createdAt: string
  featured: boolean
}

async function getNewsStories(): Promise<NewsStory[]> {
  await connectDB()

  const articles = await Article.find({
    status: 'published',
    category: 'News',
  })
    .sort({ featured: -1, createdAt: -1 })
    .limit(12)
    .lean()

  return articles.map((article: any) => ({
    _id: String(article._id),
    title: article.title ?? '',
    slug: article.slug ?? '',
    excerpt: article.excerpt ?? '',
    category: article.category ?? 'News',
    readTime: article.readTime ?? '5 min',
    createdAt: article.createdAt
      ? new Date(article.createdAt).toISOString()
      : new Date().toISOString(),
    featured: Boolean(article.featured),
  }))
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString))
}

export default async function NewsPage() {
  const stories = await getNewsStories()
  const featuredStory = stories[0]
  const latestStories = stories.slice(1)

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl md:p-10">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
            News
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.5fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Latest tech news, launch updates, and platform stories.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Stay current with product launches, industry shifts, platform changes,
                and important tech stories curated for YSP Techwiser readers.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-[28px] border border-white/10 bg-black/20 p-4 text-center">
              <div>
                <div className="text-2xl font-semibold">{stories.length}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Stories
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold">Daily</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Updates
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold">Fresh</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Coverage
                </div>
              </div>
            </div>
          </div>
        </section>

        {featuredStory ? (
          <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <Link
              href={`/blog/${featuredStory.slug}`}
              className="group rounded-[34px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 md:p-8"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-cyan-100">
                  Featured
                </span>
                <span>{featuredStory.category}</span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {featuredStory.title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                {featuredStory.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.22em] text-slate-400">
                <span>{formatDate(featuredStory.createdAt)}</span>
                <span>{featuredStory.readTime}</span>
                <span className="text-cyan-200 transition group-hover:text-cyan-100">
                  Read story →
                </span>
              </div>
            </Link>

            <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">
              <h3 className="text-lg font-semibold text-white">Why this matters</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                This section highlights the most important news item first, so readers
                can quickly find the most relevant update without scrolling through the
                entire feed.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Priority
                  </div>
                  <div className="mt-1 text-sm text-white">Featured at the top</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Category
                  </div>
                  <div className="mt-1 text-sm text-white">{featuredStory.category}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Read time
                  </div>
                  <div className="mt-1 text-sm text-white">{featuredStory.readTime}</div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-[34px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">
            <h2 className="text-2xl font-semibold text-white">No news stories yet</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Once published news articles are added to the database, they will appear
              here automatically.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/15"
            >
              Browse blog
            </Link>
          </section>
        )}

        {latestStories.length > 0 && (
          <section className="space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  More news stories
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Fresh updates and recent coverage from the YSP Techwiser editorial feed.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {latestStories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/blog/${story.slug}`}
                  className="group rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
                >
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                    <span>{story.category}</span>
                    <span>{formatDate(story.createdAt)}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-tight text-white transition group-hover:text-cyan-100">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {story.excerpt}
                  </p>

                  <div className="mt-5 text-xs uppercase tracking-[0.22em] text-slate-500">
                    {story.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
