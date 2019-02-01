// var express = require ('express');
// var app = express();
// app.get('/', function (req, res) {
//     res.send('hello World!');    
// });

// app.listen(3000, function(){
//     console.log('Exemple app listening on port 3000!node ')
// })
const express = require ('express');
const hello = require ('./hello');
const handleListen = require('./handleListen');

const PORT = 3000;
const app = express();
app.get('/', hello);
app.listen(PORT, HandleListen(console.log, PORT));