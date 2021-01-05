const express = require('express');

const app = express(); // our app that manages all requests

app.get('/', (req, res) => { // every time get request is made 
    res.send('Hi there!');
})

app.listen(3000, () => {
    console.log('Listening in port 3000');
})