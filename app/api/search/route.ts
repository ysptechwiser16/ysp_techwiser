import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { Video } from '@/models/Video'
import { resolveContentType } from '@/lib/content/resolveContentType'
import { getRouteForContentType } from '@/lib/content/routeMap'

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export async function GET(request: Request) {
  await connectDB()

  const { searchParams } = new URL(request.url)
  const q = (searchParams.get('q') ?? '').trim()
  if (!q) return NextResponse.json({ results: [] })

  const safeQuery = escapeRegex(q).slice(0, 120)

  const [articles, videos] = await Promise.all([
    Article.find({
      status: 'published',
      $or: [
        { title: { $regex: safeQuery, $options: 'i' } },
        { excerpt: { $regex: safeQuery, $options: 'i' } },
        { category: { $regex: safeQuery, $options: 'i' } },
        { tags: { $regex: safeQuery, $options: 'i' } },
      ],
    })
      .sort({ featured: -1, views: -1, createdAt: -1 })
      .limit(20)
      .lean(),
    Video.find({
      status: 'published',
      $or: [
        { title: { $regex: safeQuery, $options: 'i' } },
        { excerpt: { $regex: safeQuery, $options: 'i' } },
        { category: { $regex: safeQuery, $options: 'i' } },
        { tags: { $regex: safeQuery, $options: 'i' } },
      ],
    })
      .sort({ featured: -1, views: -1, publishedAt: -1, createdAt: -1 })
      .limit(10)
      .lean(),
  ])

  const results = [
    ...articles.map((item: any) => {
      const type = resolveContentType(item.category, item.sourceType)
      return {
        _id: String(item._id),
        title: item.title,
        slug: item.slug,
        excerpt: item.excerpt ?? '',
        category: item.category,
        readTime: item.readTime ?? '5 min',
        type,
        href: getRouteForContentType(type, item.slug),
      }
    }),
    ...videos.map((item: any) => ({
      _id: String(item._id),
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt ?? '',
      category: item.category,
      readTime: item.duration ?? 'Video',
      type: 'video',
      href: getRouteForContentType('video', item.slug),
    })),
  ]

  return NextResponse.json({ results })
}
