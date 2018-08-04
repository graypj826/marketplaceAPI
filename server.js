const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const cors          = require('cors');
const session       = require('express-session');

// Requrie db
require('./db/db');

// Use session
app.use(session({
    secret: 'shop small',
    resave: false,
    saveUninitialized: false,
}));

// Set up middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Require contorllers after the middleware
const itemController = require('./controllers/itemController');
const authController = require('./controllers/authController');

app.use('/api/v1/items', itemController);
app.use('/auth/login', authController);

app.listen(9000, () => {
    console.log('API is listening on port 9000');
});