import type { Metadata } from 'next'
import { getHomepageData } from '@/lib/homepage/getHomepageData'
import { HomeHub } from '@/components/home/HomeHub'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'YSP Techwiser | Premium Tech Media & Creator Reviews',
  description: 'Premium technology media for smartphones, laptops, AI, accessories, comparisons, videos, and collaborations.',
  openGraph: {
    title: 'YSP Techwiser',
    description: 'Premium technology media for smartphones, laptops, AI, accessories, comparisons, videos, and collaborations.',
    type: 'website',
  },
}

export default async function HomePage() {
  const data = await getHomepageData()

  return (
    <HomeHub
      featured={data.featured ?? data.latest[0] ?? null}
      trending={data.trending}
      latest={data.latest}
      reviewStories={data.reviewStories ?? []}
      guideStories={data.guideStories ?? []}
      videoStories={data.videoStories}
      stats={data.stats}
    />
  )
}
