import { Schema, models, model } from 'mongoose'

const bookmarkSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    articleId: {
      type: Schema.Types.ObjectId,
      ref: 'Article',
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
)

bookmarkSchema.index({ userEmail: 1, articleId: 1 }, { unique: true })
bookmarkSchema.index({ userEmail: 1, createdAt: -1 })

export const Bookmark = models.Bookmark || model('Bookmark', bookmarkSchema)
export default Bookmark
