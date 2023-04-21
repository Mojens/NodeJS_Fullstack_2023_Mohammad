import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;








const server = app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is running on port', server.address().port);
    }
})