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

    async getFlight (flightId){
        try {
            const flight = await this.flightsRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Unable to get city from the service layer")
            throw {error};
        }
    }


    async getAllFlightData (data){
        try {
            const flights = await this.flightsRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log("Unable to get city from the service layer")
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