/**
 * Control de la ruta principal de la api de semaforo
 */
const express = require('express');

const app = express();
const {getLeerArchivo, getInformacion} = require('../logic/cicloSemaforico');
const {file} = require('../logic/leerArchivo');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Conectar al servidor
app.get('/primero', function (req, res) {
    //res.send('Saludos desde express');
    let data = getLeerArchivo('hola')

    res.json({
      ok: true,
      informacion: data
  })
});

app.get('/primerPaso', async (req, res) =>{
  //res.send('Saludos desde express');
  let data = await getInformacion('hola')
  let info = [{"fila":0,"data":["1","3","3","3","3","3","3","2","2","2","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","4","4","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3"]}
  ,{"fila":1,"data":["4","1","1","1","1","1","1","1","1","1","4","4","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","2","2","2","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]}
  ,{"fila":2,"data":["21","1","1","1","1","1","1","1","1","1","1","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","2","2","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]}
  ,{"fila":3,"data":["24","3","3","5","5","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3"]}]
  res.json({
    ok: true,
    informacion: info
})
});

app.get('/tercero', async (req, res) =>{
  //res.send('Saludos desde express');
  const data = await file()
  console.log('respuesta: '+data)
  res.json({
    ok: true,
    informacion: data
})
});

module.exports = app;