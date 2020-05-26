require('dotenv').config()

const port = process.env.PORT || 5000;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = new express();

mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
}).then (
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

// ROUTES
const personRoute = require('./routes/person.route');

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// use ROUTES
app.use('/persons', personRoute);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
}); 