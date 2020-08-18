const express = require('express');

module.exports = server => {
    const router = express.Router();
    server.use('/api', router);

    const restService = require('../api/rest/service');
    restService.register(router, '/messages');
};