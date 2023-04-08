module.exports = {
    register(req, res) {
        var msg = "Hello, " + req.body.email + "! You are registered! :)";
        /* also works (with backticks)
        res.send({
            message: `Hello, ${req.body.email}! You are registered! :)`
        })
        */
        res.send({
            message: msg
        })
    }
}