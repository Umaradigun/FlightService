const { FlightsRepository, AirplaneRepository, AirplaneRepository } = require('../repository/index')

class FlightService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightsRepository = new FlightsRepository();
    }

    async createFlight(data){

        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightsRepository.createFlight({
                ...data, totalseats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}



module.exports = FlightService;



/**
 * {
 *      flightNumber,
 *      airplaneId,
 *      departureAirportId,
 *      arrivalAirportId,
 *      arrivalTime,
 *      departureTime,
 *      price
 *      totalseats ==> airplane
 * }
 */