import mongoose, { Schema, models, model } from 'mongoose'

const GuideSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    excerpt: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'General',
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: 'draft',
    },
  },
  {
    timestamps: true,
  }
)

export const Guide =
  models.Guide || model('Guide', GuideSchema)
