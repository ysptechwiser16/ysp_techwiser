import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  BarChart3,
  FileText,
  ImageIcon,
  LayoutDashboard,
  Lock,
  Settings,
  ShieldCheck,
  Sparkles,
  UserCog,
  Wand2,
} from 'lucide-react'
import LogoutButton from '@/components/admin/LogoutButton'

export const metadata: Metadata = {
  title: 'Admin Center | YSP Techwiser',
  description:
    'Administrative control center for YSP Techwiser content, analytics, media, creator operations, and platform management.',
}

const adminSections = [
  {
    icon: FileText,
    title: 'Content Management',
    description:
      'Manage articles, reviews, guides, comparisons, and editorial publishing workflows.',
    href: '/admin/content',
  },
  {
    icon: ImageIcon,
    title: 'Media Library',
    description:
      'Upload and organize thumbnails, creator assets, banners, and future media collections.',
    href: '/admin/media',
  },
  {
    icon: Wand2,
    title: 'Content Editor',
    description:
      'Future-ready publishing and editing workflows for premium creator content.',
    href: '/admin/editor',
  },
  {
    icon: Settings,
    title: 'System Settings',
    description:
      'Configure future platform controls, integrations, and creator environment settings.',
    href: '/admin/settings',
  },
]

const systemStats = [
  {
    icon: Activity,
    label: 'Platform status',
    value: 'Stable',
  },
  {
    icon: ShieldCheck,
    label: 'Protected routes',
    value: 'Active',
  },
  {
    icon: BarChart3,
    label: 'Analytics sync',
    value: 'Healthy',
  },
  {
    icon: UserCog,
    label: 'Creator access',
    value: 'Enabled',
  },
]

const futureModules = [
  'AI-powered publishing workflows',
  'Advanced creator analytics',
  'Real-time editorial operations',
  'Automated media optimization',
  'Future collaboration systems',
]

export const dynamic = 'force-dynamic'

export default function AdminPage() {
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
                Admin Control Center
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Powering the YSP Techwiser ecosystem.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Centralized administrative infrastructure for publishing,
                creator operations, analytics, media systems, and future platform management.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
            <LogoutButton />

                <Link href="/dashboard" className="premium-button">
                  Open dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/analytics" className="premium-button-ghost">
                  View analytics
                </Link>

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {systemStats.map((stat) => {
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
              Admin Infrastructure
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Core management systems
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Administrative systems for publishing, media, creator operations, and platform workflows.
          </p>

        </section>

        <section className="grid gap-4 md:grid-cols-2">

          {adminSections.map((section) => {
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
                  Open module
                  <ArrowRight className="h-4 w-4" />
                </div>

              </Link>
            )
          })}

        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

            <div className="premium-kicker">
              Security Layer
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Protected creator operations.
            </h2>

            <div className="mt-6 space-y-4">

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-cyan-100" />
                  <h3 className="text-lg font-semibold text-white">
                    Admin authentication
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Secure administrative access and future role-based creator controls.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-cyan-100" />
                  <h3 className="text-lg font-semibold text-white">
                    Protected workflows
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Publishing, editing, analytics, and media systems are designed with future scalability in mind.
                </p>
              </div>

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

              <div className="premium-kicker">
                Future Modules
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Planned admin expansion.
              </h2>

              <div className="mt-5 space-y-3">

                {futureModules.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">

              <div className="premium-kicker flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Platform Vision
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Building a modern creator infrastructure.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                YSP Techwiser is evolving into a scalable creator-first technology ecosystem with advanced publishing systems and premium operations tooling.
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  )
}
