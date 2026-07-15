import mongoose, { Schema, models, model } from 'mongoose'

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [180, 'Title is too long'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    excerpt: {
      type: String,
      default: '',
      trim: true,
      maxlength: [500, 'Excerpt is too long'],
    },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      index: true,
    },
    tags: [
      {
        type: String,
        trim: true,
        index: true,
      },
    ],
    readTime: {
      type: String,
      default: '5 min',
      trim: true,
    },
    status: {
      type: String,
      enum: ['draft', 'pending_review', 'published', 'scheduled', 'archived'],
      default: 'draft',
      index: true,
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    views: {
      type: Number,
      default: 0,
      min: 0,
      index: true,
    },
    likes: {
      type: Number,
      default: 0,
      min: 0,
    },
    featuredImage: {
      type: String,
      default: '',
      trim: true,
    },
    authorName: {
      type: String,
      default: 'YSP Techwiser',
      trim: true,
    },
    sourceType: {
      type: String,
      default: 'article',
      enum: ['article', 'review', 'guide', 'comparison', 'news'],
      index: true,
    },
    relatedVideoSlug: {
      type: String,
      default: '',
      trim: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
)

articleSchema.index({ status: 1, category: 1, createdAt: -1 })
articleSchema.index({ featured: 1, createdAt: -1 })
articleSchema.index({ views: -1, createdAt: -1 })
articleSchema.index({ title: 'text', excerpt: 'text', content: 'text', tags: 'text', category: 'text' })

export const Article = models.Article || model('Article', articleSchema)
export default Article
