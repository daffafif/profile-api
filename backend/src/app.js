const express = require('express');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile');
const app = express();

app.use(bodyParser.json());

app.use('/profile', profileRoutes);

module.exports = app;
