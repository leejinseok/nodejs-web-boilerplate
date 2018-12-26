require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.render('index', {
    css: [
      '/static/css/index.css'
    ],
    js: [
      '/static/js/index.js'
    ]
  });
});

module.exports = router;
