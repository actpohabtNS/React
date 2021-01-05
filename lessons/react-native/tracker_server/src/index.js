const express = require('express');
const mongoose = require('mongoose');

const app = express(); // our app that manages all requests

const mongoUri = "mongodb+srv://admin:passwordpassword@cluster0.htvoh.mongodb.net/tracker?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
})
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongoose: ', err)
})

app.get('/', (req, res) => { // every time get request is made 
    res.send('Hi there!');
})

app.listen(3000, () => {
    console.log('Listening in port 3000');
})