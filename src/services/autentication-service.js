const AuthenticationRepository = require("../repositories/authentication-repository");
const authenticationRepository = new AuthenticationRepository ();

class AuthenticationService {

    async login(login, password) {

        let user = await authenticationRepository.login(login, password);

        if (user) {
            return user;
        }
        else {
            throw new Error("Invalid user")
        }

    }
}

module.exports = AuthenticationService