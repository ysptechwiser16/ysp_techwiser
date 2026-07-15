import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { Video } from '@/models/Video'
import { Comment } from '@/models/Comment'
import { Submission } from '@/models/Submission'
import { Bookmark } from '@/models/Bookmark'

async function main() {
  await connectDB()

  const summary = {
    publishedArticles: await Article.countDocuments({ status: 'published' }),
    drafts: await Article.countDocuments({ status: 'draft' }),
    publishedVideos: await Video.countDocuments({ status: 'published' }),
    approvedComments: await Comment.countDocuments({ status: 'approved' }),
    pendingComments: await Comment.countDocuments({ status: 'pending_review' }),
    pendingSubmissions: await Submission.countDocuments({ status: 'pending_review' }),
    bookmarks: await Bookmark.countDocuments(),
  }

  console.log('Data summary:', summary)

  const requiredChecks = [
    summary.publishedArticles >= 3,
    summary.publishedVideos >= 1,
    summary.approvedComments >= 1,
    summary.pendingComments >= 1,
    summary.pendingSubmissions >= 1,
    summary.bookmarks >= 1,
  ]

  if (requiredChecks.every(Boolean)) {
    console.log('Verification passed.')
    process.exit(0)
  }

  console.error('Verification failed.')
  process.exit(1)
}

main().catch((error) => {
  console.error('Verification error:', error)
  process.exit(1)
})
