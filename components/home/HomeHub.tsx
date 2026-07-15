import Link from 'next/link'
import { ArrowRight, Clock3, Sparkles, Star, TrendingUp, Users, Newspaper, Play } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionTitle } from '@/components/ui/SectionTitle'

type HomeArticle = {
  title: string
  slug: string
  excerpt: string
  category: string
  readTime?: string
  createdAt?: string
  views?: number
  featuredImage?: string
}

type HomeVideo = {
  title: string
  slug: string
  category: string
  duration?: string
}

type HomeStats = {
  publishedArticles: number
  featuredCategories: number
  pendingSubmissions: number
}

type HomeHubProps = {
  featured: HomeArticle | null
  trending: HomeArticle[]
  latest: HomeArticle[]
  reviewStories: HomeArticle[]
  guideStories: HomeArticle[]
  videoStories: HomeVideo[]
  stats: HomeStats
}

const featuredCategories = [
  {
    title: 'Smartphones',
    description: 'Flagships, camera tests, battery life, and daily-use guidance.',
    href: '/smartphones',
  },
  {
    title: 'Laptops',
    description: 'Creator, student, and gaming laptop picks with performance focus.',
    href: '/laptops',
  },
  {
    title: 'AI',
    description: 'Practical AI tools, workflows, and productivity ideas.',
    href: '/ai',
  },
  {
    title: 'Reviews',
    description: 'Deep product testing with premium editorial polish.',
    href: '/reviews',
  },
  {
    title: 'Guides',
    description: 'How-to stories, buying advice, and decision helpers.',
    href: '/guides',
  },
  {
    title: 'Videos',
    description: 'Launch coverage, demos, and creator-friendly video stories.',
    href: '/videos',
  },
]

function formatDate(input?: string) {
  if (!input) return 'New'
  const date = new Date(input)
  return Number.isNaN(date.getTime()) ? 'New' : date.toISOString().slice(0, 10)
}

function StoryList({
  eyebrow,
  title,
  items,
  hrefPrefix,
  emptyLabel,
}: {
  eyebrow: string
  title: string
  items: HomeArticle[]
  hrefPrefix: string
  emptyLabel: string
}) {
  return (
    <GlassCard className="p-6 md:p-8">
      <SectionTitle eyebrow={eyebrow} title={title} />
      <div className="mt-5 space-y-3">
        {items.length > 0 ? (
          items.map((item, index) => (
            <Link
              key={item.slug}
              href={`${hrefPrefix}/${item.slug}`}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 px-4 py-4 transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              <div className="text-3xl font-semibold text-slate-500">{String(index + 1).padStart(2, '0')}</div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{item.category}</div>
                <div className="mt-2 text-sm font-medium text-white">{item.title}</div>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <Clock3 className="h-3.5 w-3.5" />
                  <span>{formatDate(item.createdAt)}</span>
                  <span className="text-slate-600">•</span>
                  <span>{item.readTime ?? '5 min'}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="rounded-3xl border border-white/10 bg-black/20 px-4 py-5 text-sm text-slate-300">
            {emptyLabel}
          </div>
        )}
      </div>
    </GlassCard>
  )
}

export function HomeHub({
  featured,
  trending,
  latest,
  reviewStories,
  guideStories,
  videoStories,
  stats,
}: HomeHubProps) {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.15),transparent_30%),rgba(255,255,255,0.05)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-cyan-500/12 blur-[120px] animate-glowPulse" />
          <div className="absolute right-[-8%] bottom-[-14%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] animate-floatY" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="premium-kicker flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Premium tech media
            </div>

            <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
              The future of tech media.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Reviews, comparisons, AI tutorials, creator videos, and brand collaborations built for a modern tech audience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/blog" className="premium-button">
                Explore archive <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/compare" className="premium-button-ghost">
                <TrendingUp className="h-4 w-4" /> Compare devices
              </Link>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {[
                [String(stats.publishedArticles), 'Published stories', Newspaper],
                [String(stats.featuredCategories), 'Editorial lanes', TrendingUp],
                [String(stats.pendingSubmissions), 'Pending submissions', Users],
              ].map(([value, label, Icon]) => (
                <div key={label as string} className="rounded-[28px] border border-white/10 bg-black/20 px-4 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-4 text-2xl font-semibold text-white">{value as string}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">{label as string}</div>
                </div>
              ))}
            </div>
          </div>

          <GlassCard className="overflow-hidden p-0">
            <div className="relative aspect-[16/10] bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_24%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
                  <Play className="ml-1 h-7 w-7 text-white" />
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-md">
                Featured story
              </div>
              <div className="absolute right-4 bottom-4 rounded-full border border-cyan-400/20 bg-black/60 px-3 py-1 text-xs text-cyan-100 backdrop-blur-md">
                Cinematic showcase
              </div>
            </div>

            <div className="border-t border-white/10 p-6 md:p-8">
              <div className="premium-kicker flex items-center gap-2">
                <Star className="h-4 w-4" /> Featured article
              </div>

              {featured ? (
                <>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{featured.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{featured.excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                    <span>{featured.category}</span>
                    <span>{featured.readTime ?? '5 min'}</span>
                  </div>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:gap-3"
                  >
                    Read featured article <ArrowRight className="h-4 w-4" />
                  </Link>
                </>
              ) : (
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Publish a featured article to activate this section.
                </p>
              )}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredCategories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/10"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">Featured category</div>
            <h2 className="mt-3 text-2xl font-semibold text-white">{category.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{category.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition group-hover:gap-3">
              Explore <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <StoryList
          eyebrow="Latest posts"
          title="Recent editorial stories"
          items={latest.slice(0, 4)}
          hrefPrefix="/blog"
          emptyLabel="No latest posts yet."
        />
        <StoryList
          eyebrow="Latest reviews"
          title="What we tested recently"
          items={reviewStories.slice(0, 4)}
          hrefPrefix="/reviews"
          emptyLabel="No reviews yet."
        />
        <StoryList
          eyebrow="Latest guides"
          title="Buying and how-to guides"
          items={guideStories.slice(0, 4)}
          hrefPrefix="/guides"
          emptyLabel="No guides yet."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <GlassCard className="p-6 md:p-8">
          <SectionTitle eyebrow="Trending now" title="What readers are opening right now." />
          <div className="mt-5 space-y-3">
            {trending.map((item, index) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 px-4 py-4 transition hover:bg-white/5"
              >
                <div className="text-3xl font-semibold text-slate-500">{String(index + 1).padStart(2, '0')}</div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{item.category}</div>
                  <div className="mt-2 text-sm font-medium text-white">{item.title}</div>
                  <div className="mt-2 text-xs text-slate-500">{formatDate(item.createdAt)}</div>
                </div>
              </Link>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6 md:p-8">
          <SectionTitle eyebrow="Latest videos" title="Video stories and launch coverage." />
          <div className="mt-5 space-y-3">
            {videoStories.map((video) => (
              <Link
                key={video.slug}
                href="/videos"
                className="block rounded-3xl border border-white/10 bg-black/20 px-4 py-4 transition hover:bg-white/5"
              >
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{video.category}</div>
                <div className="mt-2 text-sm font-medium text-white">{video.title}</div>
                <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
                  <span>{video.duration ?? '00:00'}</span>
                  <span>Watch</span>
                </div>
              </Link>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">
        <div className="premium-kicker flex items-center gap-2">
          <Clock3 className="h-4 w-4" /> Newsletter
        </div>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          Get premium tech updates in your inbox.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Reviews, comparisons, AI, and collaboration updates from YSP Techwiser.
        </p>
      </section>
    </div>
  )
}
