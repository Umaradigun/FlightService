const { AirportService } = require('../services/index');


const create = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'cannot create a new airport'
        })
    }
}

module.exports = {

}