const bodyParser = require('body-parser');
const express = require('express');
const { PORT } = require('./config/serverConfig')


const ApiRoutes = require('./routes/index');
const {Airport, City } = require('./models/index')

// In other to use extensive sequelize function such as city.addAirport() function
// we have to first sync the database we have to first import all models from db like const db = require ('./models/index)
// Then db.sequelize.sync({alter:true});
// Now we sholud be able to get Airports in the city(hasMany relationship) and also add Airport to the city (belongsTo relationship)
// With city.addAirport({}) and also city.getAirports
// P.s we don't need to run this part everytime the server comes up we just need to run it once ==> db.sequelize.sync({alter:true});
//      for that reason we can use an if statement with environment variables like 
//      if(process.env.SYNC_DB){    
//      db.sequelize.sync   // which means we would be using the .env file with SYNC_DB = true
//      after sync one time you can or whenever you add a new model remove SYNC_DB in the .env file
//          }
// P.s Please be careful with db Synchronization because of {alter:true} argument if set to flase all data will be lost
// OR   {force:true}







const ServerSetup = async () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    
    app.use('/api', ApiRoutes);
    


    
    app.listen(PORT, async() => {
        console.log(`Server is running on http://localhost:${PORT}`)
        
    })
};

ServerSetup();