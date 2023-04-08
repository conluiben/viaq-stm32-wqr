const {User} = require('../models') //gets index.js from models


module.exports = {
    async register(req, res) {
        /*
        var msg = "Hello, " + req.body.email + "! You are registered! :)";
        res.send({
            message: msg
        })*/
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch(err) {
            res.status(400).send({
                error: "email already in use!"
            })
        }
    }
}