import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Visit = new Schema(
  {
    photos: { type: Array },
    foodEaten: { type: Array },
    review: { type: String },
    myRestaurantId: { type: ObjectId, ref: 'MyRestaurant', required: true },
    accountId: { type: ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Visit.virtual('restaurant', {
  localField: 'myRestaurantId',
  ref: 'MyRestaurant',
  foreignField: '_id',
  justOne: true
})

Visit.virtual('account', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Visit
