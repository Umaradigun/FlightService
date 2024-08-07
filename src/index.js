const bodyParser = require('body-parser');
const express = require('express');
const { PORT } = require('./config/serverConfig')

const ServerSetup = async () =>{
    const app = express();
    

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
}

ServerSetup();