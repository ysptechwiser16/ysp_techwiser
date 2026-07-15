'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bookmark, LogIn, Loader2 } from 'lucide-react'

type BookmarkItem = {
  _id: string
  userEmail: string
  articleId: {
    title?: string
    slug?: string
    excerpt?: string
    category?: string
  } | null
}

export function BookmarksHub() {
  const [email, setEmail] = useState('demo@ysptechwiser.com')
  const [items, setItems] = useState<BookmarkItem[]>([])
  const [loading, setLoading] = useState(false)

  async function loadBookmarks(nextEmail: string) {
    const trimmed = nextEmail.trim().toLowerCase()
    if (!trimmed) {
      setItems([])
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`/api/bookmarks?email=${encodeURIComponent(trimmed)}`)
      const data = await res.json()
      setItems(Array.isArray(data.results) ? data.results : [])
    } catch {
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBookmarks(email)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="space-y-8">
      <section className="rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-10">
        <div className="premium-kicker">Bookmarks</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Saved stories.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          Enter your email to load saved items from the database.
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
            placeholder="Email address"
          />
          <button
            type="button"
            onClick={() => loadBookmarks(email)}
            className="premium-button justify-center"
          >
            <Bookmark className="h-4 w-4" /> Load bookmarks
          </button>
        </div>
      </section>

      {loading && (
        <div className="flex items-center gap-3 rounded-[32px] border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur-2xl">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading bookmarks...
        </div>
      )}

      {!loading && items.length === 0 && (
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur-2xl">
          No saved items found yet.
        </div>
      )}

      <section className="grid gap-4">
        {items.map((item) => {
          const article = item.articleId
          return (
            <Link
              key={item._id}
              href={article?.slug ? `/blog/${article.slug}` : '/blog'}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{article?.category ?? 'Saved'}</div>
              <h2 className="mt-3 text-xl font-semibold text-white">{article?.title ?? 'Saved story'}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{article?.excerpt ?? 'No excerpt available.'}</p>
              <div className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-500">
                {item.userEmail}
              </div>
            </Link>
          )
        })}
      </section>

      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur-2xl">
        <Link href="/admin/signin" className="inline-flex items-center gap-2 text-cyan-200">
          <LogIn className="h-4 w-4" /> Sign in for future login-based bookmarks
        </Link>
      </div>
    </div>
  )
}
