'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, Loader2, Sparkles } from 'lucide-react'

type SearchResult = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  type: string
  href: string
}

export function SearchHub() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)

  const trimmedQuery = useMemo(() => query.trim(), [query])

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!trimmedQuery) {
        setResults([])
        return
      }

      setLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(trimmedQuery)}`)
        const data = await res.json()
        setResults(Array.isArray(data.results) ? data.results : [])
      } catch {
        setResults([])
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [trimmedQuery])

  return (
    <div className="space-y-8">
      <section className="rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-10">
        <div className="premium-kicker flex items-center gap-2">
          <Search className="h-4 w-4" /> Search
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Search the site.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          Find articles, reviews, guides, comparisons, and videos across the full platform.
        </p>

        <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 px-4 py-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, reviews, videos..."
            className="w-full bg-transparent text-base outline-none placeholder:text-slate-500"
          />
        </div>
      </section>

      <section className="grid gap-4">
        {!trimmedQuery && (
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur-2xl">
            Start typing to search the site.
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-3 rounded-[32px] border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur-2xl">
            <Loader2 className="h-4 w-4 animate-spin" /> Searching...
          </div>
        )}

        {!loading && trimmedQuery && results.length === 0 && (
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur-2xl">
            No results found.
          </div>
        )}

        {results.map((item) => (
          <Link
            key={item._id}
            href={item.href}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{item.category}</div>
            <h2 className="mt-3 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.excerpt}</p>
            <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
              <span>{item.readTime}</span>
              <span className="inline-flex items-center gap-2 text-cyan-200">
                <Sparkles className="h-4 w-4" /> Open
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
