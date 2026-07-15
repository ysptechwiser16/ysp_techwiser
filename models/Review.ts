import mongoose, { Schema, models, model } from 'mongoose'

const ReviewSchema = new Schema(
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
      default: 'Tech',
    },

    score: {
      type: String,
      default: '8.5/10',
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

export const Review =
  models.Review || model('Review', ReviewSchema)
