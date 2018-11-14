const jwt = require("jsonwebtoken");
const express = require("express")
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require("./src/routers/authentication-route")
const config = require("./config.json")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, ApiKeyPersona, SessionKey");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DEconstE");
    next()
})

app.use(function (req, res, next) {
    let sessionKey = req.headers["x-session-key"];
    if (req.path != "/authentication/login") {

        jwt.verify(sessionKey, config.secret, function (err, decoded) {
            if (err) {
                next(err)
            }
            else {
                req.user = { name: decoded.name, login: decoded.login };
                next()
            }
        });
    }
    else {
        next()
    }
})

app.use('/', router);

module.exports = app;
