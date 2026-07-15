import type { Metadata } from 'next'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { resolveContentType } from '@/lib/content/resolveContentType'
import { getRouteForContentType } from '@/lib/content/routeMap'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'AI | YSP Techwiser',
  description: 'AI tools, tutorials, workflows, and news for creators and tech users.',
}

async function getAiStories() {
  await connectDB()
  const articles = await Article.find({
    status: 'published',
    category: 'AI',
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

export default async function AiPage() {
  const stories = await getAiStories()

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-10">
          <div className="premium-kicker">AI hub</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Practical AI tools and tutorials.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Helpful AI workflows, productivity systems, tutorials, and updates for creators and tech users.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={story.href}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{story.category}</div>
              <h2 className="mt-3 text-xl font-semibold text-white">{story.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{story.excerpt}</p>
              <div className="mt-5 text-xs uppercase tracking-[0.24em] text-slate-500">{story.readTime}</div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
