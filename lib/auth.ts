import { createHash, timingSafeEqual } from 'node:crypto'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

function sha256(value: string) {
  return createHash('sha256').update(value).digest('hex')
}

function safeEqual(a: string, b: string) {
  const aBuffer = Buffer.from(a)
  const bBuffer = Buffer.from(b)

  if (aBuffer.length !== bBuffer.length) return false
  return timingSafeEqual(aBuffer, bBuffer)
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 8,
  },
  jwt: {
    maxAge: 60 * 60 * 8,
  },
  pages: {
    signIn: '/admin/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Admin Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase()
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH?.trim()

        const email = credentials?.email?.trim().toLowerCase()
        const password = credentials?.password?.trim()

        if (!adminEmail || !adminPasswordHash || !email || !password) {
          return null
        }

        if (email !== adminEmail) return null

        if (!safeEqual(sha256(password), adminPasswordHash)) {
          return null
        }

        return {
          id: 'admin',
          name: 'YSP Techwiser Admin',
          email: adminEmail,
          role: 'admin',
        } as any
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        ;(token as any).role = (user as any).role ?? 'admin'
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).role = (token as any).role ?? 'admin'
      }
      return session
    },
  },
}
