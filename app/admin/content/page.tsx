import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { Video } from '@/models/Video'
import { Submission } from '@/models/Submission'
import {
  Activity,
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  Clock3,
  FileText,
  Layers3,
  LayoutGrid,
  Sparkles,
  VideoIcon,
} from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Admin Content | YSP Techwiser',
  description: 'View published, draft, and pending content in one place.',
}

async function getContentSummary() {
  await connectDB()

  const [articleStats, videoStats, pendingSubmissions] = await Promise.all([
    Article.aggregate([
      {
        $facet: {
          published: [{ $match: { status: 'published' } }, { $count: 'count' }],
          draft: [{ $match: { status: 'draft' } }, { $count: 'count' }],
          pending: [{ $match: { status: 'pending_review' } }, { $count: 'count' }],
        },
      },
    ]).exec(),
    Video.aggregate([
      {
        $facet: {
          published: [{ $match: { status: 'published' } }, { $count: 'count' }],
          draft: [{ $match: { status: 'draft' } }, { $count: 'count' }],
        },
      },
    ]).exec(),
    Submission.countDocuments({ status: 'pending_review' }),
  ])

  const articleCounts = articleStats[0] ?? {}
  const videoCounts = videoStats[0] ?? {}

  return {
    publishedArticles: articleCounts.published?.[0]?.count ?? 0,
    draftArticles: articleCounts.draft?.[0]?.count ?? 0,
    pendingArticles: articleCounts.pending?.[0]?.count ?? 0,
    publishedVideos: videoCounts.published?.[0]?.count ?? 0,
    draftVideos: videoCounts.draft?.[0]?.count ?? 0,
    pendingSubmissions,
  }
}

function StatCard({ icon: Icon, title, value }: { icon: ComponentType<{ className?: string }>; title: string; value: number }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Live</div>
      </div>
      <div className="mt-5 text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm text-slate-300">{title}</div>
    </div>
  )
}

const pipelineItems = [
  {
    icon: LayoutGrid,
    title: 'Editorial pipeline',
    desc: 'Published, draft, and pending states are tracked in one place for faster admin review.',
  },
  {
    icon: BookOpenText,
    title: 'Content library',
    desc: 'Articles, guides, reviews, and videos can all be audited from the same admin flow.',
  },
  {
    icon: Clock3,
    title: 'Publishing rhythm',
    desc: 'Keep an eye on what is live now and what still needs editing before publication.',
  },
  {
    icon: CheckCircle2,
    title: 'Review readiness',
    desc: 'Use this page to decide what should be edited, approved, or moved forward next.',
  },
]

export default async function AdminContentPage() {
  const data = await getContentSummary()

  const totalItems =
    data.publishedArticles +
    data.draftArticles +
    data.pendingArticles +
    data.publishedVideos +
    data.draftVideos +
    data.pendingSubmissions

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
                Content Control
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Manage the editorial pipeline.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Review published, draft, and pending content across articles, videos, and submissions from one premium admin view.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/admin/editor" className="premium-button">
                  Open editor
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/admin/media" className="premium-button-ghost">
                  <VideoIcon className="h-4 w-4" />
                  Open media
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard icon={FileText} title="Published articles" value={data.publishedArticles} />
              <StatCard icon={BookOpenText} title="Draft articles" value={data.draftArticles} />
              <StatCard icon={Activity} title="Pending articles" value={data.pendingArticles} />
              <StatCard icon={VideoIcon} title="Published videos" value={data.publishedVideos} />
              <StatCard icon={Layers3} title="Draft videos" value={data.draftVideos} />
              <StatCard icon={Clock3} title="Pending submissions" value={data.pendingSubmissions} />
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pipelineItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            )
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">
            <div className="premium-kicker">Content Overview</div>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Editorial status at a glance.
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">Articles</div>
                <div className="mt-3 text-3xl font-semibold text-white">
                  {data.publishedArticles + data.draftArticles + data.pendingArticles}
                </div>
                <p className="mt-2 text-sm text-slate-300">Total article records in the editorial system.</p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">Videos</div>
                <div className="mt-3 text-3xl font-semibold text-white">
                  {data.publishedVideos + data.draftVideos}
                </div>
                <p className="mt-2 text-sm text-slate-300">Published and draft video records in the library.</p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">Pending</div>
                <div className="mt-3 text-3xl font-semibold text-white">{data.pendingSubmissions}</div>
                <p className="mt-2 text-sm text-slate-300">Submissions waiting for review or editorial action.</p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">Total items</div>
                <div className="mt-3 text-3xl font-semibold text-white">{totalItems}</div>
                <p className="mt-2 text-sm text-slate-300">Everything currently tracked inside the admin summary.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">
              <div className="premium-kicker">Next steps</div>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                What this section will grow into.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Later we can add filters, tables, status badges, quick publish actions, and direct edit controls here.
              </p>
            </div>

            <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">
              <div className="premium-kicker flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Admin Vision
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                A control room for the entire platform.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                YSP Techwiser is moving toward a full creator operations system with publishing, analytics, media, and future workflow automation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
