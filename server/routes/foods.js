var express = require('express')
var router = express.Router()
var Controller = require('../controllers/FoodController')

/* GET home page. */
router.post('/createFood', Controller.createFood );

router.get('/showFood', Controller.getFood );
//
router.put('/updateFood/:_id', Controller.updateFood);

router.delete('/deleteFood/:_id', Controller.deleteFood )

module.exports = router;
