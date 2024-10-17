import express from 'express';
const router = express.Router();

router.get('/lobby/:name', LobbyController.getLobby)

router.post('/', (req, res) => {
    res.send('You just created a user!');
})

export default router;