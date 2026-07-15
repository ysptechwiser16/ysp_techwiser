import type { Metadata } from 'next'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { resolveContentType } from '@/lib/content/resolveContentType'
import { getRouteForContentType } from '@/lib/content/routeMap'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Compare | YSP Techwiser',
  description: 'Smartphone, laptop, AI, and accessory comparisons on YSP Techwiser.',
}

type Story = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  href: string
}

const highlights = [
  {
    title: 'Fast decisions',
    description: 'Compare products side by side before you buy.',
  },
  {
    title: 'Clear categories',
    description: 'Browse comparisons across phones, laptops, and more.',
  },
  {
    title: 'Easy reading',
    description: 'Clean layout, quick scan cards, and simple navigation.',
  },
]

async function getComparisonStories(): Promise<Story[]> {
  await connectDB()

  const articles = await Article.find({
    status: 'published',
    category: 'Comparisons',
  })
    .sort({ featured: -1, createdAt: -1 })
    .limit(12)
    .lean<any>()
    .exec()

  return articles.map((article: any) => {
    const type = resolveContentType(article.category, article.sourceType)

    return {
      _id: String(article._id),
      title: article.title ?? '',
      slug: article.slug ?? '',
      excerpt: article.excerpt ?? '',
      category: article.category ?? 'Comparisons',
      readTime: article.readTime ?? '5 min',
      href: getRouteForContentType(type, article.slug),
    }
  })
}

export default async function ComparePage() {
  const stories = await getComparisonStories()

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
        <section className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl md:p-10">
          <div className="premium-kicker">Comparison center</div>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Compare the best tech side by side.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Use this page to quickly compare smartphones, laptops, accessories, and AI tools before you decide.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {['Smartphones', 'Laptops', 'Accessories', 'AI Tools'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-black/20 p-4"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
              Latest comparisons
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Fresh comparison articles
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Open any card to read the full comparison and make a clearer buying decision.
          </p>
        </section>

        {stories.length > 0 ? (
          <section className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <Link
                key={story._id}
                href={story.href}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/8"
              >
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                  {story.category}
                </div>

                <h3 className="mt-3 text-xl font-semibold leading-8 text-white transition group-hover:text-cyan-100">
                  {story.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {story.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
                  <span>{story.readTime}</span>
                  <span>Read now</span>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <section className="mt-5 rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Comparisons are coming soon.
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Once comparison articles are published, they will appear here automatically.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20"
              >
                Request a comparison
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
