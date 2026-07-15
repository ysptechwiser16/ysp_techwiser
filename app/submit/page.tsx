import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Lightbulb,
  Send,
  Sparkles,
  Upload,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Submit Content | YSP Techwiser',
  description:
    'Submit article ideas, product suggestions, creator collaborations, and technology stories to YSP Techwiser.',
}

const submissionTypes = [
  {
    icon: FileText,
    title: 'Article ideas',
    description:
      'Pitch review topics, guides, comparisons, or technology explainers.',
  },
  {
    icon: Upload,
    title: 'Product suggestions',
    description:
      'Recommend smartphones, laptops, gadgets, and accessories to cover.',
  },
  {
    icon: Lightbulb,
    title: 'Creator contributions',
    description:
      'Share concepts, collaborations, creator projects, or future ideas.',
  },
]

const guidelines = [
  'Keep submissions clear and practical',
  'Include useful details and context',
  'Focus on technology and creator value',
  'Avoid spam or unrelated content',
  'Use simple and understandable language',
]

export const dynamic = 'force-dynamic'

export default function SubmitPage() {
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
                <Sparkles className="h-4 w-4" />
                Creator Submission Hub
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Submit your ideas to YSP Techwiser.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Share technology ideas, product suggestions, creator concepts,
                article topics, and collaboration opportunities with the YSP Techwiser platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link href="/contact" className="premium-button">
                  Contact us
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/collaborations" className="premium-button-ghost">
                  Creator collaborations
                </Link>

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <Send className="h-5 w-5 text-cyan-200" />
                  <div className="text-2xl font-semibold text-cyan-200">
                    Open
                  </div>
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Accepting submissions
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-cyan-200" />
                  <div className="text-2xl font-semibold text-cyan-200">
                    Premium
                  </div>
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Creator-focused workflow
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-200" />
                  <div className="text-2xl font-semibold text-cyan-200">
                    Structured
                  </div>
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Submission process
                </div>
              </div>

            </div>

          </div>

        </section>

        <section className="flex items-end justify-between gap-4">

          <div>

            <div className="premium-kicker">
              Submission Types
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              What you can submit
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Share ideas and contributions that match the YSP Techwiser ecosystem.
          </p>

        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {submissionTypes.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

              </div>
            )
          })}

        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

            <div className="premium-kicker">
              Submit your idea
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Creator submission form
            </h2>

            <div className="mt-6 grid gap-5">

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Submission topic
                </label>

                <input
                  type="text"
                  placeholder="Example: Smartphone review idea"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Details
                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your idea, product suggestion, or creator collaboration..."
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                />
              </div>

              <button className="premium-button w-fit">
                Submit idea
                <Send className="h-4 w-4" />
              </button>

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

              <div className="premium-kicker">
                Submission Guidelines
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Keep submissions useful and clean.
              </h2>

              <div className="mt-5 space-y-3">

                {guidelines.map((item) => (
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

            </div>

            <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">

              <div className="premium-kicker">
                Community Driven
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Help shape the future of YSP Techwiser.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Creator feedback, product suggestions, and community ideas help improve the platform and future content ecosystem.
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  )
}
