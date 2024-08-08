const { cityService } = require('../services/index');

const cityService = new cityService();


const  create = async (req, res) => {
    try {
        const city = await cityService.create(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message:"City craeted successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:"Error Creating City",
            err: error
        });
    }
}


const update = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
};


const destroy = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
};


const get = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
};


module.exports = {
    create,
    destroy,
    update,
    get
}