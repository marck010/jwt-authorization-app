const users = require("../database/users.json")

const _ = require("underscore");

class AuthenticationRepository {

    async login(login, password) {
        return await Promise.resolve(_.find(users, x => x.login == login && x.password == password));
    }

}

module.exports = AuthenticationRepository