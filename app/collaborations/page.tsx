import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Mail,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Video,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Collaborations | YSP Techwiser',
  description:
    'Brand partnerships, sponsorships, launch coverage, and creator collaborations with YSP Techwiser.',
  openGraph: {
    title: 'Collaborations | YSP Techwiser',
    description:
      'Brand partnerships, sponsorships, launch coverage, and creator collaborations with YSP Techwiser.',
    type: 'website',
  },
}

function GlassCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-[32px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  )
}

const offerings = [
  {
    icon: Megaphone,
    title: 'Sponsored articles',
    desc: 'Premium brand features and sponsor-supported editorial stories.',
  },
  {
    icon: Video,
    title: 'Launch coverage',
    desc: 'Product launches, hands-on coverage, and campaign storytelling.',
  },
  {
    icon: BarChart3,
    title: 'Brand visibility',
    desc: 'Creator-first placements designed for a technology audience.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted presentation',
    desc: 'Clear, polished, and professional collaboration experience.',
  },
]

const process = [
  {
    title: 'Tell us about the brand',
    desc: 'Share the product, campaign goal, timeline, and what kind of coverage you need.',
  },
  {
    title: 'We shape the idea',
    desc: 'We align the collaboration with the right YSP Techwiser format and audience.',
  },
  {
    title: 'Launch the project',
    desc: 'Once approved, we move into content production and publication.',
  },
]

const benefits = [
  'Premium tech audience',
  'Creator-friendly brand tone',
  'Mobile-first editorial layout',
  'Future-ready media identity',
  'Strong trust-focused presentation',
  'Clean collaboration workflow',
]

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_26%),rgba(255,255,255,0.05)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-cyan-500/12 blur-[120px]" />
            <div className="absolute right-[-8%] bottom-[-14%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="premium-kicker flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Collaborations
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Work with YSP Techwiser.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Premium sponsorships, launch coverage, product features, and
                creator collaborations for technology brands.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="premium-button">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="mailto:yashpatidar1631@gmail.com" className="premium-button-ghost">
                  <Mail className="h-4 w-4" /> Email us
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {benefits.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <GlassCard className="p-6 md:p-8">
              <div className="premium-kicker">Why collaborate here</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                A premium media surface for tech brands.
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {offerings.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-black/20 p-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </GlassCard>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {process.map((item, index) => (
            <GlassCard key={item.title} className="p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                Step {index + 1}
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
            </GlassCard>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-6 md:p-8">
            <div className="premium-kicker">What we can do</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Collaboration formats that fit the brand.
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-cyan-200" />
                Sponsored articles and reviews
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-cyan-200" />
                Product launch coverage
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-cyan-200" />
                YouTube and video partnerships
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-cyan-200" />
                Social media promotion
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-cyan-200" />
                Long-term brand storytelling
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6 md:p-8">
            <div className="premium-kicker">Brand promise</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Premium presentation with a creator-first audience.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              YSP Techwiser is built to deliver a polished collaboration
              experience, strong editorial presentation, and a future-ready
              tech media identity that supports long-term partnerships.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/about" className="premium-button">
                Learn about us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="premium-button-ghost">
                <Mail className="h-4 w-4" /> Contact page
              </Link>
            </div>
          </GlassCard>
        </section>

        <section className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">
          <div className="premium-kicker flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Ready to start
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Let us shape a collaboration that feels premium and useful.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Reach out through the contact page or email us directly to discuss
            your campaign, sponsorship, or product launch coverage.
          </p>
        </section>
      </div>
    </main>
  )
}
