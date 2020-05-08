var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
//import CreateDeck from './deck.js'

app.get('/', (req, res) => {
    res.send('LANDING PAGE');
});

let players = [];
let current_turn = 0;
let timeOut;
let _turn = 0;
const MAX_WAITING_TIME = 5000;

function next_turn() {
    _turn = current_turn++ % players.length;
    players[_turn].emit('your_turn');
    console.log("next turn triggered ", _turn);
    triggerTimeout();
}

function triggerTimeout() {
    timeOut = setTimeout(() => {
        next_turn();
    }, MAX_WAITING);
}

function resetTimeOut() {
    if (typeof timeOut === 'object') {
        console.log("timeout reset");
        clearTimeout(timeOut);
    }
}

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chatmsg', (msg) => {
        console.log('message: ' + msg);
    });

    players.push(socket);

    socket.on('pass_turn', function () {
        if (players[_turn] == socket) {
            resetTimeOut();
            next_turn();
        }
    });

    socket.on('disconnect', function () {
        console.log('A player disconnected');
        players.splice(players.indexOf(socket), 1);
        _turn--;
        console.log("A number of players now ", players.length);
    });
});

http.listen(8080, () => {
    console.log('listening on *:8080');
});