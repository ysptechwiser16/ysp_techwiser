import mongoose, { Schema, models, model } from 'mongoose'

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: 'published',
    },
  },
  {
    timestamps: true,
  }
)

export const Category =
  models.Category || model('Category', CategorySchema)
