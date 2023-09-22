const express = require('express');
const router = express.Router();
const Carro = require('../model/Carro');

const carros = [];

const c = new Carro('Fusca', 'ABC1234', 'Preto');
carros.push(c);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/carros", (req, res, next) => {
  console.log("GET /carros");
  console.log({...req})
  res.json(carros);
});

router.post("/carros", (req, res, next) => {  
  const carro = new Carro(req.body.nome, req.body.placa, req.body.cor);
  carros.push(carro);
  res.json(carros);
});



module.exports = router;
