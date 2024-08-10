const { Op, where } = require('sequelize');
const Flights = require('../models/index');

class FlightsRepository {

    #createfilter(data){
        let filter = {}

        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice){
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
        }
        return filter;
    }



    async createFlight(data){
        try {
            const Flight = await Flights.create(data);
            return Flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    };

    async getFlight(flightId){
        try {
            const Flight = await Flights.findByPk(flightId);
            return Flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }


    async getAllFlights(filter){
        try {
            const filterObject = this.#createfilter(filter)
            const Flight = await Flights.findAll({
                where: filterObject
            });
            return Flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}


module.exports = FlightsRepository;