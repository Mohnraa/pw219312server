const path = require('path');
const express = require('express');
const mysql = require('mysql');
const myConnection = require("express-myconnection");
const app = express();

// Importar rutas
const indiceRutas = require('./rutas/index');

// Configuraciones
// Agarra el puerto del servidor
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'vistas'))

//Middleware
// app.use()

// Usamos las rutas
app.use('/', indiceRutas);

//Establece el puerto del servidor al script
app.listen(app.get('port'),() => {
	console.log('Escuchando en el puerto 3000');
});