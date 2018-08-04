// Set-up db connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/marketplace');

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

mongoose.connection.on('error', (err) => {
    console.log(err, ' mongoose failed to connect');
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected');
});