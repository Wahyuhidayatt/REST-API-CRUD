var express = require('express')
var router = express.Router()
var Controller = require('../controllers/RestaurantController')

/* GET home page. */
router.post('/', Controller.createItem );

router.get('/show', Controller.getItem );
//
router.put('/update/:_id', Controller.updateItem);

router.delete('/delete/:_id', Controller.deleteItem )

module.exports = router;
