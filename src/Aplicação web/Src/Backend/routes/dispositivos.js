// criação de uma rota para chamar as requisições posteriores

const { Router } = require("express");
const express = require("express");
const router = express.Router();
// const {body, validationResult} = require("express-validator");


const dispositivosController = require("../controllers/dispositivos");

//ROTAS com seus respectivos controllers e middlewares

router.post( "/create",  dispositivosController.novosDispositivos);
// router.get( "/get", dispositivosController.createUser);
// router.put( "/update",  dispositivosController.createUser);
// router.delete( "/delete",  dispositivosController.createUser);

// exportação das rotas
module.exports = router;

