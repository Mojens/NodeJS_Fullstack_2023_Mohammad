import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: true,
})); // allows cross-origin requests
//app.use(express.static("../client/dist"));

import planetsRouter from './routers/planetsRouter.js';
import peopleRouter from './routers/peopleRouter.js';

// adds middleware to the app
app.use(planetsRouter)
app.use(peopleRouter) 









const PORT = process.env.PORT || 8080;
const server = app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is running on port', server.address().port);
    }
})