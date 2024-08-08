const { City } = require('../models/index');


class CityRepository {
   async createCity ({name})  {
     try {
        const city = await City.create ({name})
        return city;
    } catch (error) {
        throw error;
    }
};

    async deleteCity (cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.log("Error unable to delete city")
            throw {error}
        }
    }

    async updateCity (cityId){
        try {
            await City.update
        } catch (error) {
            
        }
    };

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
        } catch (error) {
            console.log('Error unable to update city')
            throw {error}
        }
    }
}

module.exports = CityRepository;