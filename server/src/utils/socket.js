//inspiration: https://stackoverflow.com/questions/54818909/access-socketio-from-another-file
let io;
require('dotenv').config()

exports.socketConnection = (server) => {
    io = require('socket.io')(server,{
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });
    // ! cors origin matters! original value of origin: process.env.CLIENT_HOST || "http://localhost:5174"
    
    // ? set up event handlers of socket.io
    io.on("connection", (socket) => {
        socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });
        socket.on("hello from client",(arg) => {
            console.log("The client said hello back!")
        });
        socket.on('disconnect', () => {
            console.info(`Client disconnected [id=${socket.id}]`);
          });
    })
}

exports.emitMessage = (key, message) => io.emit(key, message);
