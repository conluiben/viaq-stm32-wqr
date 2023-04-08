const AuthenticationController = require("./controllers/AuthenticationController") 

module.exports = (app) => {
    app.get("/status", (req,res) => {
        res.send({
            message: "Hello World"
        })
    });
    
    /* simplified below
    app.post("/register", (req,res) => {
        msg = "Hello, " + req.body.email + "! You are registered! :)";
        res.send({
            message: msg
        })
    });
    */
    app.post("/register", AuthenticationController.register);
}
