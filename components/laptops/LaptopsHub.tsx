import Link from 'next/link'
import { Laptop, Cpu, BatteryCharging, Sparkles } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionTitle } from '@/components/ui/SectionTitle'

type StoryItem = {
  title: string
  slug: string
  excerpt?: string
  category: string
  readTime?: string
}

type LaptopsHubProps = {
  stories: StoryItem[]
}

export function LaptopsHub({ stories }: LaptopsHubProps) {
  return (
    <div className="space-y-8">
      <section className="rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-10">
        <div className="premium-kicker flex items-center gap-2">
          <Laptop className="h-4 w-4" /> Laptops
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Creator, gaming, and student laptop picks.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          Performance, thermals, display quality, battery life, and buying advice for every laptop type.
        </p>
      </section>

      <GlassCard className="p-6 md:p-8">
        <SectionTitle
          eyebrow="Editorial lanes"
          title="Laptop content pillars"
          description="Use this structure to group performance reviews, creator picks, and budget guidance."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Performance checks', desc: 'CPU, GPU, thermals, and real workloads.', icon: Cpu },
            { title: 'Battery testing', desc: 'Portability and charging behavior.', icon: BatteryCharging },
            { title: 'Best picks', desc: 'Recommendations for different use cases.', icon: Sparkles },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/blog/${story.slug}`}
              className="rounded-[32px] border border-white/10 bg-black/20 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">{story.category}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{story.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{story.excerpt ?? 'Premium laptop story.'}</p>
              <div className="mt-5 text-xs uppercase tracking-[0.24em] text-slate-500">{story.readTime ?? '5 min'}</div>
            </Link>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
