import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bookmark,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Settings,
  ShieldCheck,
  Sparkles,
  Upload,
  Users,
} from 'lucide-react'
import LogoutButton from '@/components/admin/LogoutButton'

export const metadata: Metadata = {
  title: 'Dashboard | YSP Techwiser',
  description:
    'Creator dashboard, admin overview, analytics, and management center for YSP Techwiser.',
}

const dashboardStats = [
  {
    icon: FileText,
    label: 'Published articles',
    value: '124',
  },
  {
    icon: Users,
    label: 'Community users',
    value: '48K',
  },
  {
    icon: BarChart3,
    label: 'Monthly traffic',
    value: '1.2M',
  },
  {
    icon: Bookmark,
    label: 'Saved items',
    value: '26',
  },
]

const managementSections = [
  {
    icon: FileText,
    title: 'Content Management',
    description:
      'Manage reviews, guides, blogs, comparisons, and featured stories.',
    href: '/admin/content',
  },
  {
    icon: Upload,
    title: 'Media Library',
    description:
      'Upload and organize images, thumbnails, and creator assets.',
    href: '/admin/media',
  },
  {
    icon: Settings,
    title: 'Platform Settings',
    description:
      'Control dashboard configuration and future platform behavior.',
    href: '/admin/settings',
  },
  {
    icon: ShieldCheck,
    title: 'Admin Security',
    description:
      'Protected creator environment and authentication workflows.',
    href: '/admin/signin',
  },
]

const recentActivity = [
  {
    title: 'Published new smartphone review',
    time: '2 hours ago',
  },
  {
    title: 'Updated analytics dashboard',
    time: '5 hours ago',
  },
  {
    title: 'Added creator collaboration request',
    time: 'Yesterday',
  },
]

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
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
                <LayoutDashboard className="h-4 w-4" />
                Creator Dashboard
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Manage the YSP Techwiser ecosystem.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Centralized creator dashboard for content management,
                analytics, media operations, platform growth, and future ecosystem control.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
            <LogoutButton />

                <Link href="/analytics" className="premium-button">
                  View analytics
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/admin/content" className="premium-button-ghost">
                  Manage content
                </Link>

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {dashboardStats.map((stat) => {
                const Icon = stat.icon

                return (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-white/10 bg-black/20 p-5"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                      <Icon className="h-5 w-5" />
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
              Platform Management
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Dashboard control center
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Access core systems that power content publishing, analytics, and creator workflows.
          </p>

        </section>

        <section className="grid gap-4 md:grid-cols-2">

          {managementSections.map((section) => {
            const Icon = section.icon

            return (
              <Link
                key={section.title}
                href={section.href}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white transition group-hover:text-cyan-100">
                  {section.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {section.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-cyan-100">
                  Open section
                  <ArrowRight className="h-4 w-4" />
                </div>

              </Link>
            )
          })}

        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

            <div className="premium-kicker">
              Recent Activity
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Latest dashboard actions
            </h2>

            <div className="mt-6 space-y-4">

              {recentActivity.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                >

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                      <Activity className="h-4 w-4" />
                    </div>

                    <div>

                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {item.time}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

              <div className="premium-kicker">
                Dashboard Vision
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Building a future-ready creator ecosystem.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                The dashboard will evolve into a centralized creator operations center
                for analytics, publishing, collaborations, automation, and business intelligence.
              </p>

            </div>

            <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">

              <div className="premium-kicker flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Future Expansion
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Advanced creator systems coming later.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Planned upgrades include automation tools, creator AI systems,
                advanced publishing workflows, engagement intelligence, and real-time analytics.
              </p>

            </div>

          </div>

        </section>

        <section className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="premium-kicker flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Platform Mission
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Premium creator infrastructure for the future.
              </h2>

            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              YSP Techwiser is evolving beyond a traditional tech website into a modern creator-driven ecosystem with scalable publishing infrastructure.
            </p>

          </div>

        </section>

      </div>
    </main>
  )
}
