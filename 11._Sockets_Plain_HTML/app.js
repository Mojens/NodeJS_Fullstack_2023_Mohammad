import express from 'express';
const app = express();
app.use(express.static('public'));

import http from 'http';
const server = http.createServer(app);

// socket that knows the server but is not a http server
import { Server } from 'socket.io';
const io = new Server(server);

io.on('connection', (socket) => {
    console.log("A client connected", socket.id);

    socket.on("chosen color", (data) =>{

        // sends to ALL sockets in the io namespace
        io.emit("a color was chosen", data)

        // sends to all sockets expect the one that sent it
        // socket.broadcast.emit("a color was chosen", data);

        // ONLY emits to the socket itself
        // socket.emit("a color was chosen", data);
    })
  
});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log("Server running on port", PORT);

})