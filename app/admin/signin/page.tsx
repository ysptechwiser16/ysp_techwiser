import type { Metadata } from 'next'
import AdminSigninForm from '@/components/admin/AdminSigninForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Admin Sign In | YSP Techwiser',
  description: 'Secure creator and administrator sign-in portal for YSP Techwiser.',
}

export default function AdminSigninPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.10),transparent_24%),rgba(255,255,255,0.05)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="absolute bottom-[-14%] right-[-8%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="premium-kicker flex items-center gap-2">
                <span>Secure Creator Access</span>
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-6xl lg:text-[4.8rem] lg:leading-[1.02]">
                Protected admin authentication portal.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Secure sign-in environment for creators, administrators, editorial workflows, analytics systems, and future operational infrastructure.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/admin" className="premium-button">
                  Open admin center
                </a>
                <a href="/dashboard" className="premium-button-ghost">
                  Dashboard overview
                </a>
              </div>
            </div>

            <AdminSigninForm />
          </div>
        </section>
      </div>
    </main>
  )
}
