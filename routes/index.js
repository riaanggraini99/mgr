'use strict'
const express = require('express');
const router = express.Router();
const service = require('../service/service')

/* GET home page. */
router.route('/list').post(service.list)


module.exports = router;
