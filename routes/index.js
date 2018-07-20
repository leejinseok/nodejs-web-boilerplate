require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.render('index', {
    css: [
      '/resources/css/index.css'
    ],
    js: [
      '/resources/js/index.js'
    ]
  });
});

module.exports = router;
