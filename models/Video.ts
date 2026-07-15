import mongoose, { Schema, models, model } from 'mongoose'

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 180,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    excerpt: {
      type: String,
      default: '',
      trim: true,
      maxlength: 500,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    videoUrl: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnailUrl: {
      type: String,
      default: '',
      trim: true,
    },
    youtubeId: {
      type: String,
      default: '',
      trim: true,
      index: true,
    },
    category: {
      type: String,
      required: true,
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
    duration: {
      type: String,
      default: '00:00',
      trim: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'scheduled', 'archived'],
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
    publishedAt: {
      type: Date,
      default: null,
      index: true,
    },
    creator: {
      type: String,
      default: 'YSP Techwiser',
      trim: true,
    },
    source: {
      type: String,
      default: 'youtube',
      enum: ['youtube', 'uploaded', 'embedded'],
      index: true,
    },
  },
  {
    timestamps: true,
  }
)

videoSchema.index({ status: 1, publishedAt: -1 })
videoSchema.index({ featured: 1, publishedAt: -1 })
videoSchema.index({ category: 1, publishedAt: -1 })
videoSchema.index({ title: 'text', excerpt: 'text', description: 'text', tags: 'text' })

export const Video = models.Video || model('Video', videoSchema)
export default Video
