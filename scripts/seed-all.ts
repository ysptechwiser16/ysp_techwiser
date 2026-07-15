import { connectDB } from '@/lib/mongodb'
import { Article } from '@/models/Article'
import { Video } from '@/models/Video'
import { Comment } from '@/models/Comment'
import { Submission } from '@/models/Submission'
import { Bookmark } from '@/models/Bookmark'

type SeedArticle = {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  readTime: string
  status: 'draft' | 'pending_review' | 'published' | 'scheduled' | 'archived'
  featured: boolean
  views: number
  featuredImage: string
  authorName: string
  sourceType: 'article' | 'review' | 'guide' | 'comparison' | 'news'
  relatedVideoSlug?: string
}

type SeedVideo = {
  slug: string
  title: string
  excerpt: string
  description: string
  category: string
  tags: string[]
  duration: string
  status: 'draft' | 'published' | 'scheduled' | 'archived'
  featured: boolean
  views: number
  thumbnailUrl: string
  videoUrl: string
  publishedAt: Date
  creator: string
  source: 'youtube' | 'uploaded' | 'embedded'
}

const articles: SeedArticle[] = [
  {
    slug: 'iphone-16-pro-max-review',
    title: 'iPhone 16 Pro Max Review — The Ultimate Camera Beast?',
    excerpt: 'A premium review focusing on camera quality, battery life, and everyday usability.',
    content: 'Long-form editorial content placeholder for the iPhone review.',
    category: 'Smartphones',
    tags: ['iphone', 'camera', 'premium'],
    readTime: '8 min',
    status: 'published',
    featured: true,
    views: 1240,
    featuredImage: '',
    authorName: 'YSP Techwiser',
    sourceType: 'review',
  },
  {
    slug: 'galaxy-s24-ultra-vs-iphone-15-pro-max',
    title: 'Galaxy S24 Ultra vs iPhone 15 Pro Max — Full Camera Comparison',
    excerpt: 'A premium side-by-side comparison for serious smartphone buyers.',
    content: 'Comparison editorial placeholder.',
    category: 'Comparisons',
    tags: ['samsung', 'apple', 'comparison'],
    readTime: '10 min',
    status: 'published',
    featured: false,
    views: 980,
    featuredImage: '',
    authorName: 'YSP Techwiser',
    sourceType: 'comparison',
  },
  {
    slug: 'best-ai-tools-for-content-creators',
    title: 'Best AI Tools for Content Creators in 2025',
    excerpt: 'A practical guide to the best AI tools for editing, writing, and research.',
    content: 'AI guide editorial placeholder.',
    category: 'AI',
    tags: ['ai', 'tools', 'creators'],
    readTime: '7 min',
    status: 'published',
    featured: true,
    views: 860,
    featuredImage: '',
    authorName: 'YSP Techwiser',
    sourceType: 'guide',
  },
  {
    slug: 'best-laptops-for-students-2025',
    title: 'Best Laptops for Students in 2025',
    excerpt: 'A buyer-focused guide for students, creators, and everyday users.',
    content: 'Student laptop guide placeholder.',
    category: 'Laptops',
    tags: ['laptop', 'student', 'budget'],
    readTime: '9 min',
    status: 'published',
    featured: false,
    views: 720,
    featuredImage: '',
    authorName: 'YSP Techwiser',
    sourceType: 'guide',
  },
  {
    slug: 'best-accessories-for-desk-setup',
    title: 'Best Accessories for a Premium Desk Setup',
    excerpt: 'A clean roundup of desk gear, audio accessories, and charging essentials.',
    content: 'Accessories editorial placeholder.',
    category: 'Accessories',
    tags: ['accessories', 'desk', 'setup'],
    readTime: '6 min',
    status: 'published',
    featured: false,
    views: 510,
    featuredImage: '',
    authorName: 'YSP Techwiser',
    sourceType: 'article',
  },
  {
    slug: 'ysp-techwiser-platform-update',
    title: 'YSP Techwiser Platform Update — New Pages and Features',
    excerpt: 'A site update story covering the latest editorial and product experience changes.',
    content: 'Platform update news placeholder.',
    category: 'News',
    tags: ['news', 'update', 'platform'],
    readTime: '4 min',
    status: 'published',
    featured: false,
    views: 430,
    featuredImage: '',
    authorName: 'YSP Techwiser',
    sourceType: 'news',
  },
]

const videos: SeedVideo[] = [
  {
    slug: 'iphone-16-pro-max-unboxing',
    title: 'iPhone 16 Pro Max — First Look and Unboxing',
    excerpt: 'A premium first look video for the latest flagship phone.',
    description: 'Unboxing and first impressions placeholder.',
    category: 'Smartphones',
    tags: ['iphone', 'unboxing', 'first look'],
    duration: '10:45',
    status: 'published',
    featured: true,
    views: 1400,
    thumbnailUrl: '',
    videoUrl: 'https://example.com/video/iphone-16-pro-max-unboxing',
    publishedAt: new Date(),
    creator: 'YSP Techwiser',
    source: 'youtube',
  },
  {
    slug: 'best-laptops-for-students-2025-video',
    title: 'Best Laptops for Students in 2025',
    excerpt: 'A quick premium laptop buying video.',
    description: 'Laptop picks video placeholder.',
    category: 'Laptops',
    tags: ['laptops', 'students', 'buying guide'],
    duration: '08:20',
    status: 'published',
    featured: false,
    views: 860,
    thumbnailUrl: '',
    videoUrl: 'https://example.com/video/best-laptops-for-students',
    publishedAt: new Date(),
    creator: 'YSP Techwiser',
    source: 'youtube',
  },
]

async function upsertArticles() {
  for (const article of articles) {
    await Article.updateOne(
      { slug: article.slug },
      { $set: article },
      { upsert: true }
    )
  }
}

async function upsertVideos() {
  for (const video of videos) {
    await Video.updateOne(
      { slug: video.slug },
      { $set: video },
      { upsert: true }
    )
  }
}

async function seedCommentsAndSubmissions() {
  await Comment.deleteMany({})
  await Submission.deleteMany({})
  await Bookmark.deleteMany({})

  const [smartphoneArticle, laptopArticle] = await Promise.all([
    Article.findOne({ slug: 'iphone-16-pro-max-review' }),
    Article.findOne({ slug: 'best-laptops-for-students-2025' }),
  ])

  if (smartphoneArticle) {
    await Comment.insertMany([
      {
        articleId: smartphoneArticle._id,
        userName: 'Aman',
        userEmail: 'aman@example.com',
        body: 'Great review and very clear insights.',
        status: 'approved',
      },
      {
        articleId: smartphoneArticle._id,
        userName: 'Riya',
        userEmail: 'riya@example.com',
        body: 'Please add more battery test details.',
        status: 'pending_review',
      },
    ])

    await Bookmark.create({
      userEmail: 'demo@ysptechwiser.com',
      articleId: smartphoneArticle._id,
    })
  }

  if (laptopArticle) {
    await Comment.insertMany([
      {
        articleId: laptopArticle._id,
        userName: 'Kabir',
        userEmail: 'kabir@example.com',
        body: 'Very useful laptop suggestions.',
        status: 'approved',
      },
    ])

    await Bookmark.create({
      userEmail: 'demo@ysptechwiser.com',
      articleId: laptopArticle._id,
    })
  }

  await Submission.insertMany([
    {
      fullName: 'Yogesh Patidar',
      email: 'yogesh@example.com',
      title: 'Guest review suggestion',
      submissionType: 'review_request',
      details: 'Please cover the next flagship launch with camera focus.',
      status: 'pending_review',
    },
    {
      fullName: 'Brand Team',
      email: 'brand@example.com',
      title: 'Collaboration inquiry',
      submissionType: 'collaboration',
      details: 'We want to sponsor a premium product launch story.',
      status: 'pending_review',
    },
  ])
}

async function main() {
  await connectDB()
  await upsertArticles()
  await upsertVideos()
  await seedCommentsAndSubmissions()

  const counts = {
    articles: await Article.countDocuments({ status: 'published' }),
    videos: await Video.countDocuments({ status: 'published' }),
    comments: await Comment.countDocuments(),
    submissions: await Submission.countDocuments(),
    bookmarks: await Bookmark.countDocuments(),
  }

  console.log('Seed complete:', counts)
  process.exit(0)
}

main().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})
