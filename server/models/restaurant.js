'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaRestaurant = Schema({
  'name' : String,
  'owner' : String,
  'address' : String,
  'open_status' : Boolean
})

let restaurant = Mongoose.model('restaurant', schemaRestaurant)

module.exports = restaurant
