require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.render('home', {
    css: [
      '/resources/css/home.css'
    ],
    js: [
      '/resources/js/home.js'
    ]
  });
});

module.exports = router;
