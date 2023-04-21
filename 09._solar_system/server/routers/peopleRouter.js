import { Router } from 'express';
const router = Router();
import db from '../databases/connection.js';

router.get('/people', async (req, res) => {
    const people = await db.all('SELECT * FROM people;');
    res.send({ people })
});

router.post('/people', async(req,res) => {
    if(!req.body.name){
        return res.status(400).send({ message: "Missing the key (name) in the body"})
    }
    const { name } = req.body
    const { lastID } = await db.run("INSERT INTO people (name, planet_id) VALUES (?, 3);",[name,])
    res.send({ 
        id: lastID,
        name: name,
     })


})



export default router;