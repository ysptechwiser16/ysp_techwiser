import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'

export const metadata: Metadata = {
  title: {
    default: 'YSP Techwiser',
    template: '%s | YSP Techwiser',
  },
  description: 'Premium technology media platform for reviews, comparisons, AI, videos, and collaborations.',
  metadataBase: new URL('https://ysptechwiser.com'),
  openGraph: {
    title: 'YSP Techwiser',
    description: 'Premium technology media platform for reviews, comparisons, AI, videos, and collaborations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YSP Techwiser',
    description: 'Premium technology media platform for reviews, comparisons, AI, videos, and collaborations.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
