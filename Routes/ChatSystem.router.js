//file ChatSystem.router.js
import express from 'express';
import connect from '../Controller/LobbyController.js';
import LobbyController from '../Controller/LobbyController.js';

const router = express.Router();



// Route to handle fetching messages from the database
router.get('/lobby', async (req, res) => {
    try {
        // Call the connect function to get messages from the database
        const messages = await connect();

        // Send the messages back as JSON to the client
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ message: 'Error fetching messages' });
    }
});


// router.get('/lobby/:name', LobbyController.getOneLobby) 

// Example POST route (if needed for chat functionality)
router.post('/', (req, res) => {
    res.send('Chat!');
});

export default router;