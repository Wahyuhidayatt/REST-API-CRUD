'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaFoods = Schema({
  'name' : String,
  'price' : Number,
  'expired_date' : Date("2017-05-06")
})

let foods = Mongoose.model('item', schemaFoods)

module.exports = foods
