import type { Metadata } from 'next'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { resolveContentType } from '@/lib/content/resolveContentType'
import { getRouteForContentType } from '@/lib/content/routeMap'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Accessories | YSP Techwiser',
  description: 'Best accessories, smartwatches, earbuds, power banks, keyboards, mice, and desk gear.',
}

type AccessoryStory = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  type: string
  href: string
}

async function getAccessoryStories(): Promise<AccessoryStory[]> {
  await connectDB()

  const articles = await Article.find({
    status: 'published',
    category: 'Accessories',
  })
    .sort({ featured: -1, createdAt: -1 })
    .limit(12)
    .lean()

  return (articles as any[]).map((article) => {
    const type = resolveContentType(article.category, article.sourceType)

    return {
      _id: String(article._id),
      title: article.title ?? 'Untitled story',
      slug: article.slug ?? '',
      excerpt: article.excerpt ?? 'Fresh accessories coverage and practical recommendations.',
      category: article.category ?? 'Accessories',
      readTime: article.readTime ?? '5 min',
      type,
      href: getRouteForContentType(type, article.slug),
    }
  })
}

export default async function AccessoriesPage() {
  const stories = await getAccessoryStories()
  const total = stories.length

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl">
          <div className="grid gap-10 p-6 md:p-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
            <div>
              <div className="premium-kicker">Accessories</div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                Best gadgets and tech accessories.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Premium recommendations for earbuds, watches, power banks, keyboards, mice, and setup gear.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/reviews" className="premium-button">
                  Explore reviews
                </Link>
                <Link href="/compare" className="premium-button-ghost">
                  Compare products
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-cyan-200">{total}+ </div>
                  <div className="mt-2 text-sm text-slate-300">Published stories</div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-cyan-200">5+</div>
                  <div className="mt-2 text-sm text-slate-300">Accessory types</div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-cyan-200">Fresh</div>
                  <div className="mt-2 text-sm text-slate-300">Curated recommendations</div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-black/20 p-6">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">What you will find</div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <p>• Earbuds and wireless audio</p>
                <p>• Smartwatches and wearables</p>
                <p>• Power banks and charging gear</p>
                <p>• Keyboards, mice, and desk setups</p>
                <p>• Useful add-ons for daily tech use</p>
              </div>
              <div className="mt-6 rounded-[24px] border border-cyan-400/15 bg-cyan-400/5 p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">Quick note</div>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Every story here should feel practical, clean, and easy to navigate from mobile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-end justify-between gap-4">
          <div>
            <div className="premium-kicker">Latest accessories coverage</div>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Recent picks and related stories</h2>
          </div>
          <div className="text-sm text-slate-400">{total} items</div>
        </section>

        {stories.length > 0 ? (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <Link
                key={story.slug}
                href={story.href}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/7"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{story.category}</div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">{story.readTime}</div>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">{story.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{story.excerpt}</p>

                <div className="mt-6 text-sm font-medium text-cyan-200">Read story →</div>
              </Link>
            ))}
          </section>
        ) : (
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">
            <h3 className="text-2xl font-semibold text-white">No accessories stories yet</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Add published accessories articles to make this page feel alive. Once content is added, this page
              will automatically show the latest picks.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/reviews" className="premium-button">
                Browse reviews
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
