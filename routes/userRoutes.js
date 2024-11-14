import express from 'express'
import { formularioLogin, formularioRegistro, formularioPasswordOlvidada } from '../controllers/userController.js';

const router = express.Router();

//Routing
//GET lo voy a usar cuando un user visita un sitio web
//POST se usa cuando un user llena un formulario
//PUT Y PATCH son para actualizar un registro
//DELETE es para borrar algo

//ENDPOINTS.
router.get('/login', formularioLogin);
router.get('/userRegistration', formularioRegistro);
router.get('/forgottenPassword', formularioPasswordOlvidada);

export default router