require('./config/config')
// const express = require("express");

// const app = express();

// // Configuracion global de rutas
// app.use(require('./routes/index'));

// // Habilitar el servidor en el puerto
// app.listen(process.env.PORT, () => {
//   console.log('Escuchando puerto', process.env.PORT);
// })


var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
// Pase una instancia http.Server al método de escucha
var io = require('socket.io')(server);

// Configuracion global de rutas
app.use(require('./routes/index'));

// Exponga la carpeta node_modules como recursos estáticos (para acceder a socket.io.js en el navegador)
app.use('/static', express.static('node_modules'));

// Manipular conexion
io.on('connection', function (socket) {
    console.log("Connected succesfully to the socket ...");

    var news = [
        { title: 'The cure of the Sadness is to play Videogames',date:'04.10.2016'},
        { title: 'Batman saves Racoon City, the Joker is infected once again',date:'05.10.2016'},
        { title: "Deadpool doesn't want to do a third part of the franchise",date:'05.10.2016'},
        { title: 'Quicksilver demand Warner Bros. due to plagiarism with Speedy Gonzales',date:'04.10.2016'},
    ];

    // Enviar noticias al socket
    socket.emit('news', news);

    socket.on('my other event', function (data) {
        console.log(data);
    });
});

// El servidor debería empezar a escuchar
server.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
  });