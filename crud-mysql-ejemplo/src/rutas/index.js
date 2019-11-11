const express = require('express');
const rutas = express.Router();

const customerController = require('../controllers/customerController');

// rutas.get('/', (req,res) =>{
// 	res.send('Hola Node');
// });

rutas.get('/', customerController.list);
rutas.post('/add', customerController.save);

module.exports = rutas;