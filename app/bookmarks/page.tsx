import type { Metadata } from 'next'
import Link from 'next/link'
import { Bookmark, Clock3, FolderHeart, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bookmarks | YSP Techwiser',
  description:
    'Save and revisit your favorite reviews, guides, articles, comparisons, and videos.',
}

const savedCollections = [
  {
    title: 'Smartphone Reviews',
    description: 'Camera tests, flagship comparisons, battery performance, and buying advice.',
    count: 12,
  },
  {
    title: 'Laptop Guides',
    description: 'Gaming, creator, and productivity laptop recommendations.',
    count: 8,
  },
  {
    title: 'AI & Future Tech',
    description: 'AI workflows, automation tools, and future technology coverage.',
    count: 6,
  },
]

const recentBookmarks = [
  {
    title: 'Best Camera Smartphones in 2026',
    category: 'Smartphones',
    readTime: '6 min read',
  },
  {
    title: 'MacBook vs Windows Creator Laptop Comparison',
    category: 'Laptops',
    readTime: '8 min read',
  },
  {
    title: 'Best AI Tools for Productivity',
    category: 'AI',
    readTime: '5 min read',
  },
]

export default function BookmarksPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">

        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.10),transparent_24%),rgba(255,255,255,0.05)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="absolute bottom-[-14%] right-[-8%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>

              <div className="premium-kicker flex items-center gap-2">
                <Bookmark className="h-4 w-4" />
                Saved Content
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Your personal tech library.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Save your favorite reviews, guides, comparisons, and videos to revisit later from one clean bookmark center.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/blog" className="premium-button">
                  Explore content
                </Link>

                <Link href="/search" className="premium-button-ghost">
                  Search library
                </Link>
              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <Bookmark className="h-5 w-5 text-cyan-200" />
                  <div className="text-2xl font-semibold text-cyan-200">
                    26
                  </div>
                </div>
                <div className="mt-2 text-sm text-slate-300">
                  Saved items
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <FolderHeart className="h-5 w-5 text-cyan-200" />
                  <div className="text-2xl font-semibold text-cyan-200">
                    3
                  </div>
                </div>
                <div className="mt-2 text-sm text-slate-300">
                  Collections
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-cyan-200" />
                  <div className="text-2xl font-semibold text-cyan-200">
                    Premium
                  </div>
                </div>
                <div className="mt-2 text-sm text-slate-300">
                  Organized reading
                </div>
              </div>

            </div>

          </div>

        </section>

        <section className="flex items-end justify-between gap-4">

          <div>
            <div className="premium-kicker">
              Collections
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Saved topic collections
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Organize content into focused categories for easier access later.
          </p>

        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {savedCollections.map((collection) => (
            <div
              key={collection.title}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
            >

              <div className="flex items-center justify-between gap-3">

                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                  Collection
                </div>

                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  {collection.count} items
                </div>

              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {collection.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {collection.description}
              </p>

            </div>
          ))}

        </section>

        <section className="flex items-end justify-between gap-4">

          <div>
            <div className="premium-kicker">
              Recently saved
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Your latest bookmarks
            </h2>
          </div>

        </section>

        <section className="grid gap-4">

          {recentBookmarks.map((bookmark) => (
            <div
              key={bookmark.title}
              className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:border-cyan-400/20"
            >

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                    {bookmark.category}
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {bookmark.title}
                  </h3>

                </div>

                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Clock3 className="h-4 w-4" />
                  {bookmark.readTime}
                </div>

              </div>

            </div>
          ))}

        </section>

        <section className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">

          <div className="premium-kicker">
            Reading Experience
          </div>

          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Build your own premium reading space.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Save content you care about and continue reading later across smartphones, laptops, AI, accessories, videos, and future technology coverage.
          </p>

        </section>

      </div>
    </main>
  )
}
