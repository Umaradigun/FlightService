const { cityService } = require('../services/index');

const cityServices = new cityService();


const  create = async (req, res) => {
    try {
        const createCity = await cityServices.createCity(req.body);
        return res.status(201).json({
            data: createCity,
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
};


const  createMultiple  = async (req, res) => {
    try {
        const Cities = await cityServices.createMultiplesCities(req.body.cities);
        return res.status(201).json({
            data: createCity,
            success: true,
            message:"Cities craeted successfully"
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
};



const destroy = async (req,res) => {
    try {
        const response = await cityServices.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message:"City deleted successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:"Error deleting City",
            err: error
        });
    }
};

const get = async (req,res) => {
    try {
        const getcity = await cityServices.getCity(req.params.id);
        return res.status(200).json({
            data: getcity,
            success: true,
            message:"City fetched successfully"
        });
    } catch (error) { 
        return res.status(500).json({
            data: {},
            success: false,
            message:"Error fetching City",
            err: error
        });
       }
};



const update = async (req,res) => {
    try {
        const updateCity = await cityServices.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: updateCity,
            success: true,
            message:"City fetched successfully"
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message:"Error updating City",
            err: error
        });
    }
};

const  getAll = async (req, res) => {
    try {
        const cities = await cityServices.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message:"Cities fetched successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:"Error Fetching City",
            err: error
        });
    }
}



module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
    createMultiple 
}