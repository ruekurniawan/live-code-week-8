const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nasaSchema = new Schema({
  userId: {
    type: 'ObjectId',
    ref: 'User'
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  title: String,
  desc: String,
  url: String,
  mediaType: String
})

let Nasa = mongoose.model('nasa', nasaSchema)

module.exports = Nasa