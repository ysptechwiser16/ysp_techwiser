import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'

export type EditorialArticle = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  content?: string
  category?: string
  readTime?: string
  featuredImage?: string
  tags?: string[]
  status?: string
  createdAt?: string
  updatedAt?: string
}

export async function getEditorialArticle(slug: string): Promise<EditorialArticle | null> {
  await connectDB()

  const article = await Article.findOne({ slug, status: 'published' }).lean<any>()
  if (!article) return null

  return {
    _id: String(article._id),
    title: article.title ?? '',
    slug: article.slug ?? slug,
    excerpt: article.excerpt ?? '',
    content: article.content ?? '',
    category: article.category ?? '',
    readTime: article.readTime ?? '5 min',
    featuredImage: article.featuredImage ?? '',
    tags: Array.isArray(article.tags) ? article.tags : [],
    status: article.status ?? 'published',
    createdAt: article.createdAt ? new Date(article.createdAt).toISOString() : undefined,
    updatedAt: article.updatedAt ? new Date(article.updatedAt).toISOString() : undefined,
  }
}

export async function getEditorialArticleBySlug(slug: string) {
  return getEditorialArticle(slug)
}
