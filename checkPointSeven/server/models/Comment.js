import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CommentSchema = new Schema(
  {
    body: { type: String, required: true },
    isAttending: { type: Boolean, required: true, default: false },
    eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  }
  //, { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})

CommentSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  justOne: true,
  ref: 'Event'
})
