require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  let renderData = {
    css: [
      '/static/css/index.css'
    ],
    js: [
      '/static/js/index.js'
    ]
  }
  
  res.render('index', renderData);
});

module.exports = router;
