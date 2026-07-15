import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { Submission } from '@/models/Submission'
import { Video } from '@/models/Video'

export async function getHomepageData() {
  await connectDB()

  const mapDoc = (doc: any) => ({
    _id: String(doc._id),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt ?? '',
    category: doc.category,
    readTime: doc.readTime ?? '5 min',
    featured: Boolean(doc.featured),
    createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : '',
    views: doc.views ?? 0,
    featuredImage: doc.featuredImage ?? '',
  })

  const [
    featuredDocs,
    latestDocs,
    trendingDocs,
    aiDocs,
    smartphoneDocs,
    laptopDocs,
    reviewDocs,
    guideDocs,
    videoDocs,
    publishedArticles,
    publishedVideos,
    pendingSubmissions,
  ] = await Promise.all([
    Article.find({ status: 'published', featured: true }).sort({ createdAt: -1 }).limit(1).lean(),
    Article.find({ status: 'published' }).sort({ createdAt: -1 }).limit(12).lean(),
    Article.find({ status: 'published' }).sort({ views: -1, createdAt: -1 }).limit(6).lean(),
    Article.find({ status: 'published', category: 'AI' }).sort({ createdAt: -1 }).limit(4).lean(),
    Article.find({ status: 'published', category: 'Smartphones' }).sort({ createdAt: -1 }).limit(4).lean(),
    Article.find({ status: 'published', category: 'Laptops' }).sort({ createdAt: -1 }).limit(4).lean(),
    Article.find({ status: 'published', category: 'Reviews' }).sort({ createdAt: -1 }).limit(4).lean(),
    Article.find({ status: 'published', category: 'Guides' }).sort({ createdAt: -1 }).limit(4).lean(),
    Video.find({ status: 'published' }).sort({ createdAt: -1 }).limit(6).lean(),
    Article.countDocuments({ status: 'published' }),
    Video.countDocuments({ status: 'published' }),
    Submission.countDocuments({ status: 'pending_review' }),
  ])

  const latest = latestDocs.map(mapDoc)

  const featured = featuredDocs[0]
    ? {
        _id: String(featuredDocs[0]._id),
        title: featuredDocs[0].title,
        slug: featuredDocs[0].slug,
        excerpt: featuredDocs[0].excerpt ?? '',
        category: featuredDocs[0].category,
        readTime: featuredDocs[0].readTime ?? '5 min',
        featured: Boolean(featuredDocs[0].featured),
        createdAt: featuredDocs[0].createdAt ? new Date(featuredDocs[0].createdAt).toISOString() : '',
        views: featuredDocs[0].views ?? 0,
        featuredImage: featuredDocs[0].featuredImage ?? '',
      }
    : latest[0] ?? null

  return {
    featured,
    latest,
    trending: trendingDocs.map(mapDoc)
      .filter((item: any) => item.slug !== featured?.slug)
      .slice(0, 6),
    aiStories: aiDocs.map(mapDoc),
    smartphoneStories: smartphoneDocs.map(mapDoc),
    laptopStories: laptopDocs.map(mapDoc),
    reviewStories: reviewDocs.map(mapDoc),
    guideStories: guideDocs.map(mapDoc),
    videoStories: videoDocs.map((doc: any) => ({
      _id: String(doc._id),
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt ?? '',
      category: doc.category,
      duration: doc.duration ?? '00:00',
      thumbnailUrl: doc.thumbnailUrl ?? '',
      videoUrl: doc.videoUrl ?? '',
      featured: Boolean(doc.featured),
      createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : '',
    })),
    stats: {
      publishedArticles,
      publishedVideos,
      pendingSubmissions,
      featuredCategories: new Set([
        ...aiDocs.map((d: any) => d.category),
        ...smartphoneDocs.map((d: any) => d.category),
        ...laptopDocs.map((d: any) => d.category),
        ...reviewDocs.map((d: any) => d.category),
        ...guideDocs.map((d: any) => d.category),
      ].filter(Boolean)).size,
    },
  }
}
