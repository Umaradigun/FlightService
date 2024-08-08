const { CityRepository } = require('./repository/index');

class cityService {
    constructor (){
        this.cityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city
        } catch (error) {
            console.log
        }

    }

    async deleteCity(cityId){
        try {
            const city = await this.cityRepository.deleteCity(cityId);
            return city
        } catch (error) {
            console.log("Unable to delete city");
            throw {error}
        }

    }

    async updateCity(){
        try {
            const city = await this.cityRepository.createCity(data);
            return city
        } catch (error) {
            console.log
        }

    }

    async getCity(){
        try {
            const city = await this.cityRepository.createCity(data);
            return city
        } catch (error) {
            console.log
        }

    }
}

module.exports = cityService;