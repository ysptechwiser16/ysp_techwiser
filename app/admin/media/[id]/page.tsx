import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  Cloud,
  FileImage,
  FolderOpen,
  ImageIcon,
  Info,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wand2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Media Asset | YSP Techwiser',
  description:
    'Detailed creator media asset management and preview page.',
}

const assetDetails = [
  {
    label: 'Asset type',
    value: 'Thumbnail Image',
  },
  {
    label: 'Resolution',
    value: '1920 × 1080',
  },
  {
    label: 'Format',
    value: 'WEBP',
  },
  {
    label: 'Storage status',
    value: 'Synced',
  },
]

const workflowSteps = [
  'Upload media asset',
  'Review and optimize',
  'Attach to content',
  'Publish to platform',
  'Archive for reuse',
]

const futureSystems = [
  'AI-powered image optimization',
  'Cloud CDN synchronization',
  'Automated thumbnail generation',
  'Smart asset tagging',
  'Advanced creator media intelligence',
]

export const dynamic = 'force-dynamic'

export default function AdminMediaDetailPage() {
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

              <Link
                href="/admin/media"
                className="inline-flex items-center gap-2 text-sm text-cyan-100 transition hover:text-cyan-200"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to media library
              </Link>

              <div className="premium-kicker mt-6 flex items-center gap-2">
                <FileImage className="h-4 w-4" />
                Media Asset Detail
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Premium creator asset management.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Detailed media inspection view for thumbnails, creator assets,
                publishing visuals, and future cloud-powered media workflows.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <ImageIcon className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Active
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Media asset status
                </div>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Cloud className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Synced
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Cloud-ready workflow
                </div>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div className="mt-5 text-3xl font-semibold text-white">
                  Protected
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  Secure creator asset
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
                  AI-powered optimization
                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

            <div className="premium-kicker">
              Asset Preview
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Creator media preview
            </h2>

            <div className="mt-6 flex min-h-[340px] items-center justify-center rounded-[30px] border border-dashed border-cyan-400/30 bg-black/20">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400/15 text-cyan-100">
                  <ImageIcon className="h-9 w-9" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  Media preview placeholder
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Future uploads, thumbnails, creator visuals, and publishing assets will appear here.
                </p>

              </div>

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

              <div className="premium-kicker">
                Asset Information
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Media metadata
              </h2>

              <div className="mt-5 space-y-3">

                {assetDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
                  >

                    <div className="flex items-center gap-3">

                      <Info className="h-4 w-4 text-cyan-200" />

                      <span className="text-sm text-slate-300">
                        {item.label}
                      </span>

                    </div>

                    <span className="text-sm font-medium text-white">
                      {item.value}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">

              <div className="premium-kicker flex items-center gap-2">
                <CalendarClock className="h-4 w-4" />
                Upload Timeline
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Asset workflow lifecycle
              </h2>

              <div className="mt-5 space-y-3">

                {workflowSteps.map((step) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >

                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-200" />

                    <p className="text-sm leading-7 text-slate-300">
                      {step}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        <section className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

            <div>

              <div className="premium-kicker flex items-center gap-2">
                <Layers3 className="h-4 w-4" />
                Future Media Infrastructure
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Advanced creator asset systems coming later.
              </h2>

            </div>

            <div className="max-w-2xl space-y-3">

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

        <section className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">

          <div className="premium-kicker flex items-center gap-2">
            <Wand2 className="h-4 w-4" />
            Creator Vision
          </div>

          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Building a scalable media ecosystem for creators.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            The YSP Techwiser media system is evolving toward cloud-powered creator infrastructure with future automation, AI workflows, and advanced asset intelligence.
          </p>

        </section>

      </div>
    </main>
  )
}
