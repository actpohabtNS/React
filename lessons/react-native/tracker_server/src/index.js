require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')

const app = express(); // our app that manages all requests

app.use(bodyParser.json());
app.use(authRoutes); // associates all requests from 'authRoutes' with our app

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

app.get('/', (req, res) => { // every time get request is made, this func in invoked
    res.send('Hi there!');
})

app.listen(3000, () => {
    console.log('Listening in port 3000');
})