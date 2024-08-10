const Flights = require('../models/index');

class FlightsRepository {
    async createFlight(data){
        try {
            const Flight = await Flights.create(data);
            return Flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}


module.exports = FlightsRepository;