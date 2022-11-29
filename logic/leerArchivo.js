//import { readFile } from 'fs/promises';
const fs = require("fs"),
    NOMBRE_ARCHIVO = `${__dirname}/PlanCiclo.txt`;

// leemos el archivo usando top-level await y con
// codificación utf-8
//const file = await readFile(NOMBRE_ARCHIVO, 'utf-8')
async function file() {
    //const x = await readFile(NOMBRE_ARCHIVO, 'utf-8')
    const x = await fs.readFile(NOMBRE_ARCHIVO,'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        return data;
      });
  }
// transformamos el contenido en un JSON
//const json = JSON.parse(file)

module.exports ={file};