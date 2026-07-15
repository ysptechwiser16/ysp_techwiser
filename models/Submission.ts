import { Schema, models, model } from 'mongoose'

const submissionSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    submissionType: {
      type: String,
      enum: ['guest_article', 'collaboration', 'tip', 'correction', 'review_request'],
      required: true,
      index: true,
    },
    details: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending_review', 'approved', 'rejected', 'archived'],
      default: 'pending_review',
      index: true,
    },
  },
  {
    timestamps: true,
  }
)

submissionSchema.index({ status: 1, createdAt: -1 })

export const Submission = models.Submission || model('Submission', submissionSchema)
export default Submission
