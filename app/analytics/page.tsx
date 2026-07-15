import type { Metadata } from 'next'
import {
  Activity,
  BarChart3,
  Eye,
  Globe,
  LineChart,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Analytics | YSP Techwiser',
  description:
    'Track platform growth, engagement, audience activity, and performance insights for YSP Techwiser.',
}

const overviewStats = [
  {
    icon: Eye,
    label: 'Total views',
    value: '1.2M',
    growth: '+12%',
  },
  {
    icon: Users,
    label: 'Monthly users',
    value: '48K',
    growth: '+8%',
  },
  {
    icon: TrendingUp,
    label: 'Engagement',
    value: '87%',
    growth: '+5%',
  },
  {
    icon: Globe,
    label: 'Countries reached',
    value: '42',
    growth: '+3%',
  },
]

const topContent = [
  {
    title: 'Best Camera Smartphones in 2026',
    category: 'Smartphones',
    views: '120K views',
  },
  {
    title: 'MacBook vs Windows Creator Laptop Comparison',
    category: 'Laptops',
    views: '98K views',
  },
  {
    title: 'Best AI Tools for Productivity',
    category: 'AI',
    views: '84K views',
  },
]

const insights = [
  {
    title: 'Audience growth',
    description:
      'Traffic and user engagement continue to grow consistently across premium tech content.',
  },
  {
    title: 'Mobile-first traffic',
    description:
      'Most visitors are browsing through smartphones and mobile devices.',
  },
  {
    title: 'High engagement',
    description:
      'Comparison pages and reviews currently generate the strongest interaction rates.',
  },
]

export const dynamic = 'force-dynamic'

export default function AnalyticsPage() {
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
                <BarChart3 className="h-4 w-4" />
                Analytics Dashboard
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Platform growth and audience insights.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Monitor traffic, audience engagement, content performance,
                platform activity, and future growth of the YSP Techwiser ecosystem.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {overviewStats.slice(0, 4).map((stat) => {
                const Icon = stat.icon

                return (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-white/10 bg-black/20 p-5"
                  >

                    <div className="flex items-center justify-between gap-3">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                        {stat.growth}
                      </div>

                    </div>

                    <div className="mt-5 text-3xl font-semibold text-white">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-slate-300">
                      {stat.label}
                    </div>

                  </div>
                )
              })}

            </div>

          </div>

        </section>

        <section className="flex items-end justify-between gap-4">

          <div>

            <div className="premium-kicker">
              Overview Metrics
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Key platform performance
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            High-level indicators showing traffic, engagement, and growth performance.
          </p>

        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {overviewStats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >

                <div className="flex items-center justify-between gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                    {stat.growth}
                  </div>

                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  {stat.label}
                </div>

              </div>
            )
          })}

        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

            <div className="premium-kicker">
              Top Performing Content
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Most viewed content
            </h2>

            <div className="mt-6 space-y-4">

              {topContent.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                >

                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div>

                      <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                        {item.category}
                      </div>

                      <h3 className="mt-3 text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                      <Eye className="h-4 w-4" />
                      {item.views}
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

              <div className="premium-kicker">
                Insights
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Platform observations
              </h2>

              <div className="mt-5 space-y-4">

                {insights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                        <Activity className="h-4 w-4" />
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">

              <div className="premium-kicker flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Growth Direction
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Scaling toward a premium tech ecosystem.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                YSP Techwiser analytics will continue evolving with advanced dashboards,
                creator insights, audience tracking, and future business intelligence features.
              </p>

            </div>

          </div>

        </section>

        <section className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="premium-kicker flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                Future Analytics
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Advanced creator intelligence coming soon.
              </h2>

            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              Future upgrades may include real-time analytics, engagement heatmaps,
              content intelligence, creator dashboards, and advanced reporting systems.
            </p>

          </div>

        </section>

      </div>
    </main>
  )
}
