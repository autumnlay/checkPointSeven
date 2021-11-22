import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AttendeeSchema = new Schema(
  {
    eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  }
  , { timestamps: true, toJSON: { virtuals: true } }
)

// AttendeeSchema.index({ eventId: 1, accountId: 1 }, { unique: true })

AttendeeSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
AttendeeSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  justOne: true,
  ref: 'Event'
})
