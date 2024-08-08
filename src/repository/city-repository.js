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

    async updateCity (cityId,data){
        try {
            // The commented method below will only work and return data only on pg-sql db
        //    const cityUpdate =  await City.update(data,{
        //     where: {
        //         id: cityId
        //     }
            //  returning: true,
            // plain: true
        //    });
            const city = await City.findByPk(cityId);
            city.name = data.name
            await city.save();
            return city;
        } catch (error) {
            console.log("Error unable to update city");
            throw{error}
        }
    };

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log('Error unable to update city')
            throw {error}
        }
    }
}

module.exports = CityRepository;