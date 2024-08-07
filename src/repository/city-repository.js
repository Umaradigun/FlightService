const { DELETE } = require('sequelize/lib/query-types');
const { City } = require('../models/index');
const { where } = require('sequelize');

class CityRepository {
   async createCity ({name}) 
   { try {
        const city = await City.create ({name})
        return city;
    } catch (error) {
        throw error;
    }
}
    async deleteCity ({cityId}) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
        } catch (error) {
            throw error
        }
    }
}

module.exports = CityRepository;