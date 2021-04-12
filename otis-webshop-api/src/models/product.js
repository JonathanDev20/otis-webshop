import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true
  },
  productCategory: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export const Product = mongoose.model('Product', productSchema)
