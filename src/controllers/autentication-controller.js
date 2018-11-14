
const AuthenticationService = require("../services/autentication-service");
const authenticationService = new AuthenticationService ();

const jwt = require('jsonwebtoken');
const config = require("../../config.json")

class AuthenticationController {

    async login(req, res, next) {

        try {
            let login = req.body.login;
            let password = req.body.password;

            let user = await  authenticationService.login(login, password);

            var token = jwt.sign({ name:user.name, login: user.login}, config.secret);

            res.json(token);

        } catch (error) {
            next(error);
        }
    }


}

module.exports = AuthenticationController