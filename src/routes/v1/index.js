const express = require ('express');
const router = express.Router();
const CityController = require('../../controllers/city-controller');




router.post('/city',CityController);


module.exports = router; 