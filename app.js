import express from 'express';
// import chatSystem from './Routes/ChatSystem.router.js';
const app = express();
const port = 3000;

app.use(express.json());
// app.use('/chatSystem', chatSystem);

import userRoute from './Routes/User.js';
app.use(userRoute, '/user');

app.listen(port, () => {
    console.log('Server running on port : ', port);
})