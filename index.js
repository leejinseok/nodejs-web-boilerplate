global.__base = __dirname + '/';
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logErrors = require('./middlewares/logErrors');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();
app.set('view engine', 'ejs')
app.set('views', path.join(`${__dirname}/views`));
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/static', express.static(`${__dirname}/static`));
app.use('/', routes);
app.use(logErrors);
app.use(errorHandler);
app.get('*', (req, res, next) => {
  res.send('404 Not Found!');
});

app.listen(process.env.LISTEN_PORT, () => {
  console.log(`http://localhost:${process.env.LISTEN_PORT}`);
});