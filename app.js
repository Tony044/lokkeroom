const express = require('express');
const app = express();
const port = 3000;

const userRoute = require('./Routes/User');
app.use(userRoute, '/user');

app.lister(port, () => {
    console.log('Server running on port : ', port);
})