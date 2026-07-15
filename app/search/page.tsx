import type { Metadata } from 'next'
import { SearchHub } from '@/components/search/SearchHub'

export const metadata: Metadata = {
  title: 'Search | YSP Techwiser',
  description: 'Search articles, videos, reviews, comparisons, guides, and news on YSP Techwiser.',
}

const quickCategories = ['Articles', 'Reviews', 'Guides', 'News', 'Videos', 'Comparisons']

const searchTips = [
  {
    title: 'Find content fast',
    description: 'Search across posts, reviews, guides, videos, and comparison pages.',
  },
  {
    title: 'Use clear keywords',
    description: 'Try a product name, category, brand, or topic for better results.',
  },
  {
    title: 'Scan smarter',
    description: 'Use the search hub to move quickly through the content library.',
  },
]

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
        <section className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl md:p-10">
          <div className="premium-kicker">Search center</div>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Search everything on YSP Techwiser.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Find articles, reviews, guides, comparisons, videos, and news from one central search hub.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {quickCategories.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {searchTips.map((item) => (
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

        <section className="mt-8 rounded-[36px] border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur-2xl">
          <SearchHub />
        </section>
      </div>
    </main>
  )
}
