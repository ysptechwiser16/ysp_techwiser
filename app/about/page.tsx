import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BrainCircuit,
  Mail,
  Sparkles,
  Star,
  Users,
  ShieldCheck,
  Clock3,
  Target,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | YSP Techwiser',
  description:
    'Learn the story, mission, values, and creator journey behind YSP Techwiser.',
  openGraph: {
    title: 'About | YSP Techwiser',
    description:
      'Learn the story, mission, values, and creator journey behind YSP Techwiser.',
    type: 'website',
  },
}

const values = [
  {
    title: 'Premium clarity',
    desc: 'Every review and guide is designed to be useful, readable, and trustworthy.',
    icon: Star,
  },
  {
    title: 'Creator-first',
    desc: 'Content is built for real buyers, creators, students, and everyday users.',
    icon: Users,
  },
  {
    title: 'Future-focused',
    desc: 'We cover smartphones, laptops, AI, accessories, and launch stories with a modern lens.',
    icon: BrainCircuit,
  },
  {
    title: 'Transparent work',
    desc: 'Sponsored content and brand collaborations are handled with clear presentation.',
    icon: ShieldCheck,
  },
]

const milestones = [
  {
    year: '2025',
    title: 'YSP Techwiser launched',
    desc: 'A premium technology media brand was started to publish useful, creator-first tech content.',
  },
  {
    year: 'Now',
    title: 'Building a platform',
    desc: 'The website is evolving into a full media and collaboration system for tech content.',
  },
  {
    year: 'Next',
    title: 'Scaling the ecosystem',
    desc: 'More categories, deeper editorial systems, and stronger brand partnerships are planned.',
  },
]

const storyPillars = [
  'Smartphone reviews',
  'Laptop reviews',
  'AI tutorials',
  'Comparisons',
  'Buying guides',
  'Launch coverage',
]

const whatWeDo = [
  'Publish premium reviews that help users make better decisions.',
  'Create comparison content that answers real buying questions.',
  'Cover AI tools and workflows in a practical creator-friendly way.',
  'Build a media-ready brand for collaborations and long-term growth.',
]

function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode
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

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div>
      <div className="premium-kicker">{eyebrow}</div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_26%),rgba(255,255,255,0.05)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-cyan-500/12 blur-[120px]" />
            <div className="absolute right-[-8%] bottom-[-14%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="premium-kicker flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> About YSP Techwiser
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                A premium creator-led tech brand built for clarity, trust, and
                growth.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                YSP Techwiser is a futuristic technology media platform focused
                on smartphones, laptops, AI, accessories, comparisons, videos,
                and collaboration-ready brand storytelling.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/collaborations" className="premium-button">
                  Work with us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="premium-button-ghost">
                  <Mail className="h-4 w-4" /> Contact us
                </Link>
              </div>
            </div>

            <GlassCard className="p-6 md:p-8">
              <div className="grid gap-3 md:grid-cols-2">
                {storyPillars.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 px-4 py-4">
                <div className="premium-kicker flex items-center gap-2 text-cyan-100">
                  <ShieldCheck className="h-4 w-4" /> Mission
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Our mission is to help people make smarter tech choices
                  through premium reviews, practical comparisons, and
                  creator-friendly guidance.
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon
            return (
              <GlassCard key={item.title} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.desc}
                </p>
              </GlassCard>
            )
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard className="p-6 md:p-8">
            <SectionTitle
              eyebrow="Creator journey"
              title="How this brand came together."
            />
            <div className="mt-5 space-y-4">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="rounded-[28px] border border-white/10 bg-black/20 px-4 py-4"
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                    {item.year}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 md:p-8">
            <SectionTitle
              eyebrow="What we do"
              title="The content system behind the brand."
            />
            <div className="mt-5 space-y-3">
              {whatWeDo.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-6 md:p-8">
            <SectionTitle
              eyebrow="Audience focus"
              title="Who this site is built for."
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                'Smartphone buyers',
                'Laptop buyers',
                'AI users',
                'Gamers',
                'Creators',
                'Tech enthusiasts',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 md:p-8">
            <SectionTitle
              eyebrow="Brand promise"
              title="Why sponsors and users should trust the platform."
            />
            <p className="mt-4 text-sm leading-7 text-slate-300">
              YSP Techwiser combines premium presentation, clear editorial
              structure, and future-ready creator branding so the platform can
              grow into a real media brand with long-term trust.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/collaborations" className="premium-button">
                Sponsor a story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/news" className="premium-button-ghost">
                <Clock3 className="h-4 w-4" /> Explore coverage
              </Link>
            </div>
          </GlassCard>
        </section>

        <section className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">
          <div className="premium-kicker flex items-center gap-2">
            <Target className="h-4 w-4" /> Mission statement
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Our mission is simple: make technology easier to understand and
            easier to buy.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            We want every article, review, comparison, and video to help the
            reader feel more informed, more confident, and more connected to
            the future of technology.
          </p>
        </section>
      </div>
    </main>
  )
}
