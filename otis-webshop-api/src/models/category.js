import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  categoryImgSrc: {
    type: String,
    required: true
  },
  categoryImgAlt: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export const Category = mongoose.model('Category', categorySchema)
