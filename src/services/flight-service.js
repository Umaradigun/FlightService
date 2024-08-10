const { FlightsRepository, AirplaneRepository } = require('../repository/index');
const compareTime = require('../utils/helper')

class FlightService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightsRepository = new FlightsRepository();
    }

    async createFlight(data){

        try {
                if (!compareTime(data.arrivalTime, data.depatureTime)) {
                    throw {error: 'Arrival Time cannot be less than Departure Time'}
                }

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightsRepository.createFlight({
                ...data, totalseats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    };

    async getFlightdata (){
        // Todo 
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