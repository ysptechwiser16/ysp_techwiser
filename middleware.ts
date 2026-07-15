import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const protectedPrefixes = [
  '/admin',
  '/dashboard',
  '/analytics',
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname === '/admin/signin' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/auth') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  const isProtected = protectedPrefixes.some((prefix) =>
    pathname.startsWith(prefix)
  )

  if (!isProtected) return NextResponse.next()

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  if ((token as any)?.role === 'admin') {
    return NextResponse.next()
  }

  const url = new URL('/admin/signin', request.url)
  url.searchParams.set('from', pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/analytics/:path*',
  ],
}
