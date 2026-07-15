import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Database,
  Globe,
  Lock,
  MonitorCog,
  Palette,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wand2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin Settings | YSP Techwiser',
  description:
    'Administrative platform settings, creator controls, environment configuration, and future infrastructure management.',
}

const settingGroups = [
  {
    icon: Globe,
    title: 'Platform configuration',
    description:
      'Control global platform behavior, public settings, and future publishing rules.',
  },
  {
    icon: Palette,
    title: 'UI preferences',
    description:
      'Manage future branding, theme systems, layouts, and creator experience settings.',
  },
  {
    icon: Lock,
    title: 'Security controls',
    description:
      'Administrative protection systems and future role-based access management.',
  },
  {
    icon: Database,
    title: 'Infrastructure settings',
    description:
      'Database, storage, APIs, and deployment-related operational settings.',
  },
]

const systemModules = [
  'Authentication and admin access',
  'Environment configuration',
  'Publishing permissions',
  'Creator workflow management',
  'Future automation systems',
]

const futureSystems = [
  'AI-powered platform management',
  'Cloud infrastructure monitoring',
  'Advanced creator permissions',
  'Automated system diagnostics',
  'Real-time operational intelligence',
]

export const dynamic = 'force-dynamic'

export default function AdminSettingsPage() {
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
                <Settings2 className="h-4 w-4" />
                Platform Settings Center
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Configure the YSP Techwiser ecosystem.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Administrative configuration center for platform behavior,
                infrastructure systems, creator workflows, and future operational control.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link href="/admin" className="premium-button">
                  Open admin center
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/dashboard" className="premium-button-ghost">
                  Dashboard overview
                </Link>

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Secure
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Protected admin controls
                </div>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Server className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Stable
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Infrastructure status
                </div>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <MonitorCog className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Managed
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Creator operations
                </div>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Future
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  AI-assisted operations
                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="flex items-end justify-between gap-4">

          <div>

            <div className="premium-kicker">
              Settings Infrastructure
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Platform configuration modules
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Administrative systems designed for scalable creator operations and platform management.
          </p>

        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {settingGroups.map((group) => {
            const Icon = group.icon

            return (
              <div
                key={group.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {group.description}
                </p>

              </div>
            )
          })}

        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

            <div className="premium-kicker">
              Configuration Workspace
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Platform control environment.
            </h2>

            <div className="mt-6 space-y-4">

              {systemModules.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                >

                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />

                  <p className="text-sm leading-7 text-slate-300">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-8 rounded-[28px] border border-dashed border-cyan-400/30 bg-black/20 p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Bell className="h-5 w-5" />
                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    System notifications
                  </h3>

                  <p className="mt-1 text-sm text-slate-300">
                    Future operational alerts and diagnostics will appear here.
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

              <div className="premium-kicker">
                Future Operations
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Advanced infrastructure systems
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

            <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">

              <div className="premium-kicker flex items-center gap-2">
                <Wand2 className="h-4 w-4" />
                Platform Vision
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Future-ready creator infrastructure.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                YSP Techwiser settings infrastructure is designed to evolve into a scalable creator operations and platform intelligence system.
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  )
}
