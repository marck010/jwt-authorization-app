
class UserController {

    async getUser(req, res) {

        try {
            res.json(req.user);

        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = UserController