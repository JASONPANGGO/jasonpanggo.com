const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = 3100
const users = require('./www/api/users')

app.use('/users', users);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('a user disconnected');
    });
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg)
    });
})

http.listen(PORT, () => {
    console.log(`the express server is listening on ${PORT}`)
})