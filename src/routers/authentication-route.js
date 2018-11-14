const express =  require('express');
const route =  express.Router();

const AuthenticationController = require("../controllers/autentication-controller");
const authenticationController = new AuthenticationController()

const UserController = require("../controllers/user-controller");
const userController = new UserController()

route.post('/authentication/login', authenticationController.login );
route.get('/user/getUser', userController.getUser );

module.exports = route;

