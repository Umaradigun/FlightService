const { CityRepository } = require ('../repository/index');

class cityService {
    constructor (){
        this.cityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city
        } catch (error) {
            console.log("Unable to create city from the service layer");
        }

    }

    async deleteCity(cityId){
        try {
            const city = await this.cityRepository.deleteCity(cityId);
        } catch (error) {
            console.log("Unable to delete city from the service layer");
            throw {error};
        }
            return true;
    }

    async updateCity(cityId,data){
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city
        } catch (error) {
            console.log("Error Unable to update city from the service layer")
            throw{error};
        }

    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city
        } catch (error) {
            console.log("Unable to get city from the service layer")
            throw {error};
        }

    }

    async getAllCities(filter){
        try {
            const cities = await this.cityRepository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Unable to get city from the service layer")
            throw {error};
        }

    }
}


module.exports = cityService; 