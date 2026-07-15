'use client'

import { useState, type FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Lock } from 'lucide-react'

export default function AdminSigninForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const callbackUrl = searchParams.get('from') ?? '/admin'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl,
    })

    setIsLoading(false)

    if (!result || result.error) {
      setError('Invalid email or password.')
      return
    }

    router.replace(result.url ?? callbackUrl)
    router.refresh()
  }

  return (
    <div className="rounded-[36px] border border-white/10 bg-black/20 p-6 backdrop-blur-2xl md:p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/15 text-cyan-100">
        <Lock className="h-6 w-6" />
      </div>

      <h2 className="mt-6 text-3xl font-semibold text-white">
        Administrator Sign In
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-300">
        Authorized creator and administrator access only.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Email address
          </label>
          <input
            type="email"
            placeholder="admin@ysptechwiser.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
            autoComplete="email"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter secure password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
            autoComplete="current-password"
          />
        </div>

        {error ? (
          <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="premium-button w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Lock className="h-4 w-4" />
          {isLoading ? 'Signing in...' : 'Secure Sign In'}
        </button>
      </form>
    </div>
  )
}
