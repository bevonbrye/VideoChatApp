// create server 
const { Console } = require('console');
const express = require('express');
// runs app function 
const app = express(); 
const server = require('http').Server(app);
const io = require('socket.io')(server);
//create a dynamic url: 
const {v4: uuidV4 } = require('uuid');

app.set('view engine', 'ejs')
//contains js 
app.use(express.static('public'))


app.get('/', (req, res) => { 
    res.redirect(`/${uuidV4()}`)
 }); 

app.get('/:room', (req, res) => { 
   res.render('room', { roomId: req.params.room} ) 
})

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
      socket.join(roomId)
      socket.to(roomId).broadcast.emit('user-connected', userId)
    })
})
server.listen(3000)
