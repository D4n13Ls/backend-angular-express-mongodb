/*SERVIDOR EXPRESS*/ 
/* punto de entrada para la aplicacion*/


// REQUARIES IMPORTACION DE LIBRERIA QUE SE OCUPAN PARA QUE FUNCIONE ALGO

var express = require('express');
var mongoose = require('mongoose');


//inicializar variables

var app = express();  


// Conexion a la base de datos con MongoDB

mongoose.connection.openUri('mongodb://localhost/27017/pruebaDB', (err, res) =>{

if(err) throw err;
console.log('Mongodb server: \x1b[32m%s\x1b[0m', 'online');

});



//Rutas
app.get('/', (Request, Response, next) =>{

    Response.status(200).json({
        ok:true,
        messague: 'peticion realizada corrctamente'
    })
})


//escuchar peticiones
app.listen(3000, () => {

    console.log('Express server corriendo en el puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})