global.__base = __dirname + '/';
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const api = require('./api');

app.set('view engine', 'ejs')
app.set('views', path.join(`${__dirname}/views`));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/static', express.static(`${__dirname}/static`));
app.use('/resources', express.static(`${__dirname}/resources/dist`));
app.use('/api', api);
app.use('/', routes);


app.listen(3100, () => {
  console.log('Server is running at 3100');
});
