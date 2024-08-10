const express = require ('express');
const router = express.Router();
const { FlightController, CityController } = require('../../controllers/index');
const AirportController = require ('../../controllers/airport-controller')




router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.post('/cities',CityController.createMultiple);

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.get);
router.get('/flights/All', FlightController.getAll);


router.post('./airports', AirportController.create);


module.exports = router; 