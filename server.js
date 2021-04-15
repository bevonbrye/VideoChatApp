// create server 
const express = require('express')
// runs app function 
const app = express(); 
const server = require('http').Server(app)
const io = require('socket.io')(server)


app.set('view engine', 'ejs')
//contains js 
app.use(express.static('public'))


app.get('/', (req, res) => { 
    
 }); 

app.get('')


server.listen(3000)