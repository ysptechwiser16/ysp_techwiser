import type { Metadata } from 'next'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { Category } from '@/models/Category'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Categories | YSP Techwiser',
  description:
    'Browse premium tech categories, content lanes, and curated topic hubs on YSP Techwiser.',
}

type CategoryItem = {
  name: string
  slug: string
  description: string
  count: number
  latest: string
  featured: boolean
}

type CategoryAggregate = {
  _id: string
  count: number
  latestCreatedAt?: Date
}

function slugifyCategory(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function formatDate(value?: string) {
  if (!value) return 'New'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'New'
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

async function getCategories(): Promise<CategoryItem[]> {
  await connectDB()

  const [categoryDocs, publishedCount, aggregates] = await Promise.all([
    Category.find({ status: 'published' })
      .sort({ featured: -1, order: 1, createdAt: -1 })
      .lean(),
    Article.countDocuments({ status: 'published' }),
    Article.aggregate<CategoryAggregate>([
      { $match: { status: 'published' } },
      {
        $group: {
          _id: { $ifNull: ['$category', 'Uncategorized'] },
          count: { $sum: 1 },
          latestCreatedAt: { $max: '$createdAt' },
        },
      },
      { $sort: { count: -1, latestCreatedAt: -1 } },
    ]),
  ])

  const bySlug = new Map<string, CategoryItem>()

  for (const doc of categoryDocs as any[]) {
    const slug = slugifyCategory(doc.slug || doc.name || '')
    if (!slug) continue

    bySlug.set(slug, {
      name: doc.name ?? 'Untitled category',
      slug,
      description:
        doc.description ??
        `Browse ${doc.name ?? 'this'} stories on YSP Techwiser.`,
      count: 0,
      latest: doc.createdAt ? new Date(doc.createdAt).toISOString() : '',
      featured: Boolean(doc.featured),
    })
  }

  for (const item of aggregates) {
    const name = String(item._id ?? 'Uncategorized')
    const slug = slugifyCategory(name)
    if (!slug) continue

    const existing = bySlug.get(slug)

    bySlug.set(slug, {
      name,
      slug,
      description:
        existing?.description ??
        `Browse premium ${name.toLowerCase()} content on YSP Techwiser.`,
      count: item.count ?? 0,
      latest: item.latestCreatedAt
        ? new Date(item.latestCreatedAt).toISOString()
        : existing?.latest ?? '',
      featured: existing?.featured ?? false,
    })
  }

  const categories = Array.from(bySlug.values()).sort((a, b) => {
    if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured)
    if (a.count !== b.count) return b.count - a.count
    return a.name.localeCompare(b.name)
  })

  return categories.length > 0
    ? categories
    : [
        {
          name: 'Smartphones',
          slug: 'smartphones',
          description: 'Flagships, camera tests, battery checks, and buying advice.',
          count: 0,
          latest: '',
          featured: true,
        },
        {
          name: 'Laptops',
          slug: 'laptops',
          description: 'Creator, gaming, and student laptop coverage.',
          count: 0,
          latest: '',
          featured: true,
        },
      ]
}

export default async function CategoryPage() {
  const categories = await getCategories()
  const totalCategories = categories.length
  const featuredCount = categories.filter((item) => item.featured).length

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl md:p-10">
          <div className="premium-kicker">Categories</div>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Explore tech topics by category.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Browse curated topic hubs for smartphones, laptops, AI, reviews, guides, videos, and more.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/blog" className="premium-button">
                  Explore blog
                </Link>
                <Link href="/search" className="premium-button-ghost">
                  Search content
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-4">
                <div className="text-2xl font-semibold text-cyan-200">{totalCategories}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                  Categories
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-4">
                <div className="text-2xl font-semibold text-cyan-200">{featuredCount}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                  Featured lanes
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-4">
                <div className="text-2xl font-semibold text-cyan-200">{categories.reduce((sum, item) => sum + item.count, 0)}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                  Published stories
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-end justify-between gap-4">
          <div>
            <div className="premium-kicker">Browse categories</div>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Topic hubs and content lanes
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Open any category to jump into its detail view.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                  Category
                </div>
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  {category.count} stories
                </div>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-cyan-100">
                {category.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {category.description}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-slate-500">
                <span>{formatDate(category.latest)}</span>
                <span className="text-cyan-200">Open →</span>
              </div>
            </Link>
          ))}
        </section>

        {categories.length === 0 && (
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">
            <h3 className="text-2xl font-semibold text-white">No categories yet</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Once categories are published, they will appear here automatically.
            </p>
          </section>
        )}
      </div>
    </main>
  )
}
