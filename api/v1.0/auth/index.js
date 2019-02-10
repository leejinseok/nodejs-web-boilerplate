const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl');
router.get('/test', ctrl.getTest);
module.exports = router;