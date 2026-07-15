import type { Metadata } from 'next'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Blog Archive | YSP Techwiser',
  description:
    'Premium technology blog archive covering smartphones, laptops, AI, accessories, videos, and comparisons.',
}

type BlogArticle = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  createdAt: string
}

async function getArticles(): Promise<BlogArticle[]> {
  await connectDB()

  const articles = await Article.find({ status: 'published' })
    .sort({ featured: -1, createdAt: -1 })
    .limit(24)
    .lean()

  return (articles as any[]).map((article) => ({
    _id: String(article._id),
    title: article.title ?? 'Untitled article',
    slug: article.slug ?? '',
    excerpt:
      article.excerpt ??
      'Latest technology stories, reviews, comparisons, and guides from YSP Techwiser.',
    category: article.category ?? 'Blog',
    readTime: article.readTime ?? '5 min read',
    createdAt: article.createdAt ? new Date(article.createdAt).toISOString() : '',
  }))
}

function formatDate(value: string) {
  if (!value) return 'Fresh post'
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

export default async function BlogPage() {
  const articles = await getArticles()
  const total = articles.length
  const featured = articles[0]

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl">
          <div className="grid gap-10 p-6 md:p-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
            <div>
              <div className="premium-kicker">Blog archive</div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                Latest stories from YSP Techwiser.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Reviews, comparisons, guides, and news from the premium tech editorial archive.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/search" className="premium-button">
                  Search articles
                </Link>
                <Link href="/guides" className="premium-button-ghost">
                  Browse guides
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-cyan-200">{total}</div>
                  <div className="mt-2 text-sm text-slate-300">Published posts</div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-cyan-200">SEO</div>
                  <div className="mt-2 text-sm text-slate-300">Structured content</div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-cyan-200">Fast</div>
                  <div className="mt-2 text-sm text-slate-300">Mobile-first reading</div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-black/20 p-6">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                Featured archive focus
              </div>

              {featured ? (
                <div className="mt-4 space-y-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      {featured.category}
                    </div>
                    <h2 className="mt-3 text-xl font-semibold text-white">{featured.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{featured.excerpt}</p>
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
                      What this page is for
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      A clean archive for article discovery, category browsing, and quick scanning on mobile.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-4 rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
                  No published blog posts yet.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="flex items-end justify-between gap-4">
          <div>
            <div className="premium-kicker">Latest posts</div>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Recent stories from the blog</h2>
          </div>
          <div className="text-sm text-slate-400">{total} items</div>
        </section>

        {articles.length > 0 ? (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug || article._id}
                href={article.slug ? `/blog/${article.slug}` : '/blog'}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                  {article.category}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{article.excerpt}</p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    {formatDate(article.createdAt)}
                  </div>
                  <div className="text-sm font-medium text-cyan-200">{article.readTime}</div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">
            <h3 className="text-2xl font-semibold text-white">No posts published yet</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Add published articles to make this archive feel active. Once content exists, the latest posts will appear here automatically.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/search" className="premium-button">
                Search content
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
