var express = require('express')
var router = express.Router()
var Controller = require('../controllers/RestaurantController')

/* GET home page. */
router.post('/create', Controller.create );

router.get('/show', Controller.get);

router.get('/showById/:id', Controller.getRestaurant)
//
router.put('/update/:_id', Controller.update);

router.delete('/delete/:_id', Controller.delete )

module.exports = router;
