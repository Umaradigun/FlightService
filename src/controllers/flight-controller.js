const { FlightService } = require('../services/index');


const flightService = new FlightService();

const create = async (req, res) => {
    
    try {
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            depatureAirportId: req.body.depatureAirportId,
            arrivalAirportId:  req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
 
        }
        
        
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message:'Flight Created Successfully'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:"Error creating Flight",
            err: error
        });
    }
};


const get = async (req,res) => {
    try {
        const getFlight = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: getcity,
            success: true,
            message:"Flight fetched successfully"
        });
    } catch (error) { 
        return res.status(500).json({
            data: {},
            success: false,
            message:"Error fetching flight",
            err: error
        });
       }
};



const getAll = async (req,res) => {
    try {
        const getAllFlight = await flightService.getFlight(req.query);
        return res.status(200).json({
            data: getAllFlight,
            success: true,
            message:"Flight fetched successfully",
            err: {}
        });
    } catch (error) { 
        return res.status(500).json({
            data: {},
            success: false,
            message:"Error fetching flight",
            err: error
        });
       }
};



module.exports = {
    create,
    get,
    getAll
}