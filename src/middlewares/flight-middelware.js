const validateCreateFlight = (req, res) => {
    if (
        req.body.flightNumber ||
        req.body.airplaneId||
        req.body.depatureAirportId||
        req.body.arrivalAirportId||
        req.body.arrivalTime||
        req.body.departureTime||
        req.body.price
    ){
        return res.status(400).json({
            data: {},
            success: false,
            message:'Invalid request body for createflight',
            err: 'Missing mandatory properties of create flight'
        })
    }
    next();
}


module.exports = {
    validateCreateFlight
}