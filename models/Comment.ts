import { Schema, models, model } from 'mongoose'

const commentSchema = new Schema(
  {
    articleId: {
      type: Schema.Types.ObjectId,
      ref: 'Article',
      required: true,
      index: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    userEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    status: {
      type: String,
      enum: ['pending_review', 'approved', 'rejected', 'spam'],
      default: 'pending_review',
      index: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

commentSchema.index({ articleId: 1, status: 1, createdAt: -1 })

export const Comment = models.Comment || model('Comment', commentSchema)
export default Comment
