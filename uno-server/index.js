var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
//import CreateDeck from './deck.js'
const utils = require('./utilities.js')

io.on('connection', (socket) => {
    socket.on('chatmsg', (msg) => {
        console.log('message: ' + msg);
        socket.emit('chatmsg', msg)
    });

    socket.on('createRoom', () => {
        socket.join('TestRoom')
    });
});

http.listen(8080, () => {
    console.log('listening on *:8080');
});

module.exports = {io};