const bodyParser = require('body-parser');
const express = require('express');
const { PORT } = require('./config/serverConfig')
const CityRepository = require('./repository/city-repository');
const AirportRepository = require('./repository/airport-repository');

const ServerSetup = async () =>{
    const app = express();
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({ extended: true}));
    
        const repo = new AirportRepository();

    try {
        repo.deleteAirport(9)
    } catch (error) {
        throw error
    }
    
    app.listen(PORT, async() => {
        console.log(`Server is running on http://localhost:${PORT}`)
        
    })
};

ServerSetup();