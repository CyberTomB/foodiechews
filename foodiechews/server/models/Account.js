import mongoose from 'mongoose'
import MyRestaurant from './MyRestaurant'
const Schema = mongoose.Schema

// NOTE: This is how subdocuments work! Reference this!
const locationSchema = new Schema({
  city: { type: String, required: true },
  state: { type: String, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } })

const pendingRestaurantSchema = new Schema({
  yelpId: { type: String },
  exists: { type: Boolean }
})

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    bio: { type: String, default: '' },
    picture: { type: String },
    location: [locationSchema],
    // TODO: Use subdocument instead of array
    // myEats is an array of MyRestaurants objects (should be empty when profile is created)
    myEats: [MyRestaurant],
    // TODO: Also use a subdoc to define the object props
    pendingRestaurant: pendingRestaurantSchema,
    activeLocation: { type: Object, default: {} },
    noDupes: { type: Boolean, default: true },
    showRestaurants: { type: Boolean, default: true },
    showOnlyOpen: { type: Boolean, default: true }

    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
