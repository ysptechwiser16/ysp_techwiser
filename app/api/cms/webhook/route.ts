import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'

type CmsArticlePayload = {
  slug?: string
  title?: string
  excerpt?: string
  content?: string
  category?: string
  tags?: string[]
  status?: 'draft' | 'pending_review' | 'published' | 'scheduled' | 'archived'
  featured?: boolean
  featuredImage?: string
  readTime?: string
  sourceType?: 'article' | 'review' | 'guide' | 'comparison' | 'news'
  authorName?: string
  relatedVideoSlug?: string
}

export async function POST(request: Request) {
  const secret = process.env.CMS_WEBHOOK_SECRET
  if (!secret) {
    return NextResponse.json(
      { error: 'CMS webhook secret is not configured' },
      { status: 503 }
    )
  }

  const incomingSecret = request.headers.get('x-cms-webhook-secret')?.trim()
  if (!incomingSecret || incomingSecret !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  const article = body?.article as CmsArticlePayload | undefined

  if (!article?.slug || !article?.title || !article?.category) {
    return NextResponse.json({ error: 'Invalid article payload' }, { status: 400 })
  }

  await connectDB()

  const safeStatus: CmsArticlePayload['status'] =
    article.status && ['draft', 'pending_review', 'published', 'scheduled', 'archived'].includes(article.status)
      ? article.status
      : 'pending_review'

  await Article.updateOne(
    { slug: article.slug.trim().toLowerCase() },
    {
      $set: {
        title: article.title.trim(),
        excerpt: article.excerpt ?? '',
        content: article.content ?? '',
        category: article.category.trim(),
        tags: Array.isArray(article.tags) ? article.tags : [],
        status: safeStatus,
        featured: Boolean(article.featured),
        featuredImage: article.featuredImage ?? '',
        readTime: article.readTime ?? '5 min',
        sourceType: article.sourceType ?? 'article',
        authorName: article.authorName ?? 'YSP Techwiser',
        relatedVideoSlug: article.relatedVideoSlug ?? '',
      },
    },
    { upsert: true }
  )

  return NextResponse.json({ ok: true })
}
