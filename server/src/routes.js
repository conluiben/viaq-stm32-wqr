module.exports = (app) => {
    app.get("/status", (req,res) => {
        res.send({
            message: "Hello World"
        })
    });
    
    app.post("/register", (req,res) => {
        msg = "Hello, " + req.body.email + "! You are registered! :)";
        /* also works (with backticks)
        res.send({
            message: `Hello, ${req.body.email}! You are registered! :)`
        })
        */
        res.send({
            message: msg
        })
    });
}
