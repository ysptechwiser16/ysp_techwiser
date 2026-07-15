'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

type BlogItem = {
  title: string
  slug: string
  excerpt: string
  category: string
  readTime?: string
}

type BlogArchiveProps = {
  items: BlogItem[]
}

export function BlogArchive({ items }: BlogArchiveProps) {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.category)))
    return ['all', ...unique]
  }, [items])

  const filteredItems = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    return items.filter((item) => {
      const matchesCategory = filter === 'all' || item.category === filter
      const matchesQuery =
        !trimmed ||
        item.title.toLowerCase().includes(trimmed) ||
        item.excerpt.toLowerCase().includes(trimmed) ||
        item.category.toLowerCase().includes(trimmed)
      return matchesCategory && matchesQuery
    })
  }, [items, filter, query])

  return (
    <div className="space-y-6">
      <section className="rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-10">
        <div className="premium-kicker">Blog archive</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Latest stories from YSP Techwiser.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          Reviews, comparisons, guides, and news from the premium tech editorial archive.
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <div className="flex-1 rounded-[28px] border border-white/10 bg-black/20 px-4 py-4">
            <div className="flex items-center gap-3">
              <Search className="h-4 w-4 text-cyan-200" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search archive..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-[28px] border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All categories' : category}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{article.category}</div>
            <h2 className="mt-3 text-xl font-semibold text-white">{article.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{article.excerpt}</p>
            <div className="mt-5 text-xs uppercase tracking-[0.24em] text-slate-500">{article.readTime ?? '5 min'}</div>
          </Link>
        ))}
      </section>
    </div>
  )
}
