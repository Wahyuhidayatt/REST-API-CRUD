let express = require('express')
let router = express.Router()
let Restaurant = require('../models/restaurant')

let restaurants = {}

  restaurants.create = function(req, res, next) {
    Restaurant.create({
      name : req.body.name,
      owner : req.body.owner,
      address : req.body.address,
      open_status : req.body.open_status
    }).then(function(){
      res.send("Create new Restaurant")
    })
  }

  restaurants.get = function(req, res) {
    Restaurant.find().then(function(itemData) {
      res.send(itemData)
    })
  }
  //
  restaurants.update = function(req, res) {
    Restaurant.findById(req.params._id, function (err, restaurant) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
              // If that attribute isn't in the request body, default back to whatever it was before.
              restaurant.name = req.body.name,
              restaurant.owner = req.body.owner,
              restaurant.address = req.body.address,
              restaurant.open_status = req.body.open_status

            // Save the updated document back to the database
            restaurant.save(function (err, item) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send("update food berhasil");
            });
        }
     });
  }
  //
  restaurants.delete = function(req, res) {
    Restaurant.findByIdAndRemove(req.params._id, function (err, restaurantData) {
      // We'll create a simple object to send back with a message and the id of the document that was removed
      // You can really do this however you want, though.
      var response = {
          message: "successfully deleted",
          id : restaurantData._id
      };
      res.send(response);
    });
  }

module.exports = restaurants
