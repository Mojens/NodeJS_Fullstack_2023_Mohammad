import { Router } from 'express';
const router = Router();
import db from '../databases/connection.js';

router.get('/planets', async (req, res) => {
    const planets = await db.all('SELECT * FROM planets;');
    res.send({ data: planets })
});

router.post('/planets', async (req, res) => {
    
});

export default router;