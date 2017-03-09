'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaFoods = Schema({
  'name' : String,
  'price' : Number,
  'expired_date' : Date
})

let foods = Mongoose.model('item', schemaFoods)

module.exports = foods
