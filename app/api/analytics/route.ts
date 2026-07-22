import { NextResponse } from 'next/server'
import { getIsAdminSession } from '@/lib/adminAuth'
import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { Video } from '@/models/Video'
import { Comment } from '@/models/Comment'
import { Submission } from '@/models/Submission'
import { Bookmark } from '@/models/Bookmark'

export async function GET() {
  const isAdmin = await getIsAdminSession()
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  await connectDB()

  const [publishedArticles, publishedVideos, approvedComments, pendingComments, pendingSubmissions, bookmarks] = await Promise.all([
    Article.countDocuments({ status: 'published' }),
    Video.countDocuments({ status: 'published' }),
    Comment.countDocuments({ status: 'approved' }),
    Comment.countDocuments({ status: 'pending_review' }),
    Submission.countDocuments({ status: 'pending_review' }),
    Bookmark.countDocuments(),
  ])

  const topArticles = await Article.find({ status: 'published' })
    .sort({ views: -1, createdAt: -1 })
    .limit(5)
    .select('title slug views category')
    .lean()

  const topVideos = await Video.find({ status: 'published' })
    .sort({ views: -1, publishedAt: -1 })
    .limit(5)
    .select('title slug views category duration')
    .lean()

  return NextResponse.json({
    summary: {
      publishedArticles,
      publishedVideos,
      approvedComments,
      pendingComments,
      pendingSubmissions,
      bookmarks,
    },
    topArticles,
    topVideos,
  })
}
