require('dotenv').config();

const express = require('express');
const ejs = require('ejs');
const expresslayout = require('express-ejs-layouts');
const path = require('path');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { connect } = require('http2');
const flash = require('express-flash');
const session = require('express-session');
const MongoDBStore = require('connect-mongo');

const app = express()

// Database Connection
const url = 'mongodb://localhost/realtime_pizza';
mongoose.connect(url);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connection Completed');
})

// Session Store
let mongoStore = new  MongoDBStore({
    mongoUrl: url,
    collectionName: 'sessions'
})

// Session Config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    // cookie: { manAge: 1000 * 60 * 60 * 24 } // 24 hours
    cookie: { manAge: 1000 * 10} // 24 hours
}));



app.use(flash())


// ser template engine
app.use(expresslayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

//assets
app.use(express.static('public'))
app.use(express.json())

require('./routes/web')(app)

app.listen(PORT, () => {
    console.log('listen...........');
})