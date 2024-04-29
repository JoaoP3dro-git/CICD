const express = require('express');
const router = express.Router();
const UserController = require('../controller/User');

router
    .get('/', UserController.getAll)
    .get('/:id', UserController.getById)

module.exports = router;