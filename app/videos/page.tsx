import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Clock3,
  Film,
  MonitorPlay,
  PlayCircle,
  Sparkles,
  TrendingUp,
  Tv,
  Video,
  Wand2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Video Hub | YSP Techwiser',
  description:
    'Watch technology videos, creator content, reviews, guides, comparisons, and future tech coverage from YSP Techwiser.',
}

const featuredVideos = [
  {
    title: 'Best Camera Smartphones in 2026',
    category: 'Smartphones',
    duration: '12 min',
  },
  {
    title: 'MacBook vs Windows Creator Laptop Comparison',
    category: 'Laptops',
    duration: '18 min',
  },
  {
    title: 'Best AI Tools for Productivity',
    category: 'AI',
    duration: '9 min',
  },
]

const videoCategories = [
  {
    icon: Video,
    title: 'Reviews',
    description:
      'Detailed smartphone, laptop, and gadget review content.',
  },
  {
    icon: MonitorPlay,
    title: 'Comparisons',
    description:
      'Side-by-side comparisons for devices and creator workflows.',
  },
  {
    icon: Tv,
    title: 'Creator videos',
    description:
      'Tech explainers, guides, ecosystem breakdowns, and tutorials.',
  },
  {
    icon: TrendingUp,
    title: 'Future technology',
    description:
      'AI, future devices, creator systems, and upcoming innovations.',
  },
]

const futureSystems = [
  'Creator video publishing workflows',
  'Advanced streaming infrastructure',
  'AI-assisted video optimization',
  'Automated thumbnail systems',
  'Future creator intelligence tools',
]

export const dynamic = 'force-dynamic'

export default function VideoPage() {
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
                <Film className="h-4 w-4" />
                YSP Video Hub
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Premium creator video ecosystem.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Watch technology reviews, creator explainers, comparisons,
                AI content, future tech videos, and premium ecosystem coverage.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link href="/reviews" className="premium-button">
                  Explore reviews
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/guides" className="premium-button-ghost">
                  Browse guides
                </Link>

              </div>

            </div>

            <div className="rounded-[36px] border border-white/10 bg-black/20 p-6 backdrop-blur-2xl">

              <div className="flex min-h-[280px] items-center justify-center rounded-[28px] border border-dashed border-cyan-400/30 bg-black/20">

                <div className="text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400/15 text-cyan-100">
                    <PlayCircle className="h-10 w-10" />
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold text-white">
                    Featured creator video
                  </h2>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-300">
                    Future featured creator videos, reviews, and premium content previews will appear here.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="flex items-end justify-between gap-4">

          <div>

            <div className="premium-kicker">
              Featured Videos
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Popular creator content
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Premium technology videos designed for creators, enthusiasts, and future-focused audiences.
          </p>

        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {featuredVideos.map((video) => (
            <div
              key={video.title}
              className="group rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
            >

              <div className="flex min-h-[180px] items-center justify-center rounded-[24px] border border-dashed border-cyan-400/20 bg-black/20">

                <PlayCircle className="h-12 w-12 text-cyan-100 transition group-hover:scale-110" />

              </div>

              <div className="mt-5 flex items-center justify-between gap-3">

                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                  {video.category}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock3 className="h-3.5 w-3.5" />
                  {video.duration}
                </div>

              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {video.title}
              </h3>

            </div>
          ))}

        </section>

        <section className="flex items-end justify-between gap-4">

          <div>

            <div className="premium-kicker">
              Video Categories
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Explore creator video systems
            </h2>

          </div>

        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {videoCategories.map((category) => {
            const Icon = category.icon

            return (
              <div
                key={category.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {category.description}
                </p>

              </div>
            )
          })}

        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

            <div className="premium-kicker">
              Creator Vision
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Building a premium technology video ecosystem.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              YSP Techwiser video infrastructure is evolving into a creator-first media ecosystem with reviews, comparisons, explainers, tutorials, and future technology coverage.
            </p>

          </div>

          <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">

            <div className="premium-kicker flex items-center gap-2">
              <Wand2 className="h-4 w-4" />
              Future Video Systems
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white">
              Advanced creator infrastructure coming later.
            </h2>

            <div className="mt-5 space-y-3">

              {futureSystems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </section>

      </div>
    </main>
  )
}
