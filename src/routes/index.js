const express = require('express');
const router = express.Router();


const v1ApiRoutes = require ('./v1');
// const v2ApiRoutes = require ('./v2')
// This should have be our version 2 api in case there is need

router.use('/v1', v1ApiRoutes);

module.exports = router;