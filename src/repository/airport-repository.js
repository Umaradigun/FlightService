// const { airport } = require('../models/index')


// class AirportRepository{
//     async createAirport ({name,address,city_id}){
//         try {
//             const airport = await airport.create({name,address,city_id});
//         } catch (error) {
//             throw error;
//         }
//     };

//     async deleteAirport (airport_id){
//         try {
//             const deleteAirport = await airport.destroy({
//                 where:{
//                     id: airport_id
//                 }
//             });
//         } catch (error) {
//             throw error;
//         }
//     }
// }

// module.exports = AirportRepository;





const { Airport } = require('../models/index'); // Ensure 'Airport' is correctly imported

class AirportRepository {
  async createAirport({ name, address, city_id }) {
    try {
      const newAirport = await Airport.create({ name, address, city_id }); // Use a different variable to avoid confusion
      return newAirport; // Return the created airport if needed
    } catch (error) {
      throw error;
    }
  }

  async deleteAirport(airport_id) {
    try {
      const deletedAirport = await Airport.destroy({
        where: {
          id: airport_id
        }
      });
      return deletedAirport; // Return the result of the delete operation if needed
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AirportRepository;
