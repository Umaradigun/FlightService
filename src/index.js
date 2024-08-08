const bodyParser = require('body-parser');
const express = require('express');
const { PORT } = require('./config/serverConfig')


const ApiRoutes = require('./routes/index')

const ServerSetup = async () =>{
    const app = express();
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({ extended: true}));
    
    app.use('/api', ApiRoutes);

    
    app.listen(PORT, async() => {
        console.log(`Server is running on http://localhost:${PORT}`)
        
    })
};

ServerSetup();