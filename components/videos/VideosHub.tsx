import Link from 'next/link'
import { Play, Clock3, Sparkles } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionTitle } from '@/components/ui/SectionTitle'

type VideoItem = {
  title: string
  slug: string
  excerpt?: string
  category: string
  duration?: string
  videoUrl?: string
  thumbnailUrl?: string
}

type VideosHubProps = {
  videos: VideoItem[]
}

export function VideosHub({ videos }: VideosHubProps) {
  return (
    <div className="space-y-8">
      <section className="rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-10">
        <div className="premium-kicker flex items-center gap-2">
          <Play className="h-4 w-4" /> Videos
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Cinematic tech videos and launch coverage.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          Watch creator videos, premium launch clips, and quick editorial highlights from YSP Techwiser.
        </p>
      </section>

      <GlassCard className="p-6 md:p-8">
        <SectionTitle
          eyebrow="Latest videos"
          title="Featured video grid"
          description="Use this section to highlight the newest or most important video stories."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <Link
              key={video.slug}
              href="/videos"
              className="overflow-hidden rounded-[32px] border border-white/10 bg-black/20 transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="aspect-video bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{video.category}</div>
                <h2 className="mt-3 text-xl font-semibold text-white">{video.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{video.excerpt ?? 'Premium video highlight.'}</p>
                <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-cyan-200" />
                    {video.duration ?? '00:00'}
                  </span>
                  <span className="inline-flex items-center gap-2 text-cyan-200">
                    <Sparkles className="h-4 w-4" />
                    Watch
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
