//file ChatSystem.router.js
import express from 'express';
import moduleName from 'module';

const router = express.Router();

router.post('/', (req, res) => {
    res.send('Chat!');
})



export default router;