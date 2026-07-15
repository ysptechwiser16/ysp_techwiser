import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  FileEdit,
  FileText,
  LayoutPanelTop,
  PenSquare,
  Save,
  Send,
  Sparkles,
  Wand2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Editor Workspace | YSP Techwiser',
  description:
    'Premium creator editor workspace for articles, reviews, guides, and publishing workflows.',
}

const editorFeatures = [
  {
    icon: PenSquare,
    title: 'Structured writing',
    description:
      'Create articles, reviews, comparisons, and guides in one centralized workflow.',
  },
  {
    icon: Save,
    title: 'Draft workflow',
    description:
      'Save unfinished work safely before moving content into review or publishing.',
  },
  {
    icon: Send,
    title: 'Publishing pipeline',
    description:
      'Move creator content through editorial stages with a cleaner publishing flow.',
  },
  {
    icon: Bot,
    title: 'Future AI tools',
    description:
      'Later upgrades may include AI-assisted editing and intelligent publishing systems.',
  },
]

const publishingFlow = [
  'Create draft',
  'Review and edit',
  'Prepare media assets',
  'Approve for publishing',
  'Publish to platform',
]

export const dynamic = 'force-dynamic'

export default function AdminEditorPage() {
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
                <LayoutPanelTop className="h-4 w-4" />
                Editor Workspace
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Premium creator publishing environment.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Centralized editorial workspace for articles, reviews,
                guides, comparisons, media coordination, and future creator automation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link href="/admin/content" className="premium-button">
                  Open content center
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
                  <FileText className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Drafts
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Content editing workflow
                </div>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Save className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Save
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Draft persistence flow
                </div>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Review
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Editorial preparation
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
                  AI-assisted workflows
                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="flex items-end justify-between gap-4">

          <div>

            <div className="premium-kicker">
              Editorial Workflow
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Creator publishing process
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            A cleaner publishing structure for scalable creator operations.
          </p>

        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {editorFeatures.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {feature.description}
                </p>

              </div>
            )
          })}

        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

            <div className="premium-kicker">
              Writing Workspace
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Premium content creation environment.
            </h2>

            <div className="mt-6 grid gap-5">

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Title
                </label>

                <input
                  type="text"
                  placeholder="Enter content title"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Category
                </label>

                <input
                  type="text"
                  placeholder="Example: Smartphones"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Content
                </label>

                <textarea
                  rows={10}
                  placeholder="Write your article, review, guide, or comparison..."
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                />
              </div>

              <div className="flex flex-wrap gap-4">

                <button className="premium-button">
                  <Save className="h-4 w-4" />
                  Save draft
                </button>

                <button className="premium-button-ghost">
                  <Send className="h-4 w-4" />
                  Submit review
                </button>

              </div>

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

              <div className="premium-kicker">
                Publishing Flow
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Editorial stages
              </h2>

              <div className="mt-5 space-y-3">

                {publishingFlow.map((item) => (
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

              <div className="premium-kicker flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Future Expansion
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                AI-assisted creator workflows coming later.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Future upgrades may include intelligent writing assistance,
                automated formatting, publishing automation, and advanced editorial systems.
              </p>

            </div>

          </div>

        </section>

        <section className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="premium-kicker flex items-center gap-2">
                <FileEdit className="h-4 w-4" />
                Creator Infrastructure
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Building a premium editorial ecosystem.
              </h2>

            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              The YSP Techwiser editor workspace is designed to evolve into a scalable creator publishing system with modern workflows and future automation tooling.
            </p>

          </div>

        </section>

      </div>
    </main>
  )
}
