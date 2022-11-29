//const fs = require('fs');

const readline = require("readline"),
    fs = require("fs"),
    NOMBRE_ARCHIVO = `${__dirname}/PlanCiclo.txt`;

    async function* numberLines(linesAsync) {
        let counter = 1;
        for await (const line of linesAsync) {
          yield counter + ': ' + line;
          counter++;
        }
      }

const getInformacion = async(dir) => {

    let fila = 0
    let matriz = []
    try {
    
        let lector = readline.createInterface({
            input: fs.createReadStream(NOMBRE_ARCHIVO)
        });
        const line = lector.on("line", linea => {
            let enterosLinea = linea.split(",")
            let longitud = enterosLinea.length;            
            
            let enteros = linea.split(",");
            let info = { fila: fila, data: enteros}
            
            console.log('INFO: '+JSON.stringify(info));

            fila++;
            
            //console.log("Tenemos una línea:", linea);
           return JSON.stringify(info)
        });
        
        //console.log('LINEA: '+JSON.stringify(line));
        let a = await line()
        matriz.push(a)
        console.log('Matrix: '+matriz);
        
   
        return matriz

    } catch (error) {
        console.error(error)
        return error;
        
    } 
}

// Este metodo lee el archivo de plan de conexion y vuelve la informacion en una matriz de 4 x 16
let getLeerArchivo= async (nombreArchivo) =>{

    let fila = 0
    let matriz = []
    try {
    
        let lector = readline.createInterface({
            input: fs.createReadStream(NOMBRE_ARCHIVO)
        });
        const line = lector.on("line", linea => {
            let enterosLinea = linea.split(",")
            let longitud = enterosLinea.length;            
            
            let enteros = linea.split(",");
            let info = { fila: fila, data: enteros}
            
            console.log('INFO: '+info);

            fila++;
            
            //console.log("Tenemos una línea:", linea);
           return JSON.stringify(info)
        });
        
        console.log('LINEA: '+JSON.stringify(line));
        matriz.push(line)
        //console.log(matriz);
        
   
        return matriz

    } catch (error) {
        console.error(error)
        return error;
        
    } 
}

module.exports ={getLeerArchivo, getInformacion};