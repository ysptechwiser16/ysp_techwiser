import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  Clock3,
  Instagram,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | YSP Techwiser',
  description:
    'Contact YSP Techwiser for collaborations, support, corrections, and media inquiries.',
  openGraph: {
    title: 'Contact | YSP Techwiser',
    description:
      'Contact YSP Techwiser for collaborations, support, corrections, and media inquiries.',
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

function ContactTile({
  icon: Icon,
  title,
  body,
  href,
  action,
  external = false,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  body: string
  href: string
  action: string
  external?: boolean
}) {
  return (
    <GlassCard className="p-6 md:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{body}</p>

      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        className="mt-6 inline-flex items-center gap-2 text-cyan-200 transition hover:text-cyan-100"
      >
        {action} <Sparkles className="h-4 w-4" />
      </a>
    </GlassCard>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_26%),rgba(255,255,255,0.05)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-cyan-500/12 blur-[120px]" />
            <div className="absolute right-[-8%] bottom-[-14%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <div>
              <div className="premium-kicker flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Contact YSP Techwiser
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Get in touch for collaborations, corrections, and media work.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Use this page for brand partnerships, product features,
                sponsored stories, support requests, or general platform
                questions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:yashpatidar1631@gmail.com"
                  className="premium-button"
                >
                  <Mail className="h-4 w-4" /> Send email
                </a>
                <Link href="/collaborations" className="premium-button-ghost">
                  <Sparkles className="h-4 w-4" /> Collaborations
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-slate-300">
                  Typical reply: 24–72 hours
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-slate-300">
                  Best for: brands, creators, readers
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-slate-300">
                  Tone: professional and direct
                </span>
              </div>
            </div>

            <GlassCard className="p-6 md:p-8">
              <div className="premium-kicker flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Contact standards
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                The fastest way to get a clear reply.
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  'Include your name and brand.',
                  'State the purpose clearly.',
                  'Share deadlines or launch dates.',
                  'Mention if it is paid, organic, or support related.',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 px-4 py-4">
                <div className="flex items-center gap-2 text-cyan-100">
                  <Clock3 className="h-4 w-4" /> Response note
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Clear subject lines and detailed context help us respond
                  faster and reduce back-and-forth.
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <ContactTile
            icon={Mail}
            title="Email"
            body="For collaborations, product features, corrections, support, and platform questions."
            href="mailto:yashpatidar1631@gmail.com"
            action="Send email"
          />

          <ContactTile
            icon={Instagram}
            title="Instagram"
            body="For quick updates, creator contact, and content visibility around YSP Techwiser."
            href="https://instagram.com/ysp_techwiser"
            action="Open profile"
            external
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-6 md:p-8">
            <div className="premium-kicker">Best use cases</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              What this contact page is for.
            </h2>

            <div className="mt-5 space-y-3">
              {[
                'Brand partnerships and sponsorships.',
                'Product launch coverage and feature requests.',
                'Corrections, updates, and editorial feedback.',
                'General inquiries from readers and creators.',
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
            <div className="premium-kicker">Faster path</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Need a collaboration conversation?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Go to the collaboration page for a cleaner brand-oriented
              workflow. That keeps partnership requests organized and easier to
              review.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/collaborations" className="premium-button">
                Open collaborations <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className="premium-button-ghost">
                <Sparkles className="h-4 w-4" /> Learn about the brand
              </Link>
            </div>
          </GlassCard>
        </section>

        <section className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6 md:p-8">
          <div className="premium-kicker flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> Quick contact rule
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Keep your message short, clear, and specific.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            The clearer the request, the faster YSP Techwiser can respond with
            the right answer or next step.
          </p>
        </section>
      </div>
    </main>
  )
}
