const AuthenticationController = require("./controllers/AuthenticationController")
const SensorController = require("./controllers/SensorController")
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy")

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
    app.post("/register", AuthenticationControllerPolicy.register, AuthenticationController.register);
    app.post("/login", AuthenticationController.login); //no more policy

    app.post("/sensor-update", SensorController.update);
    app.post("/dashboard-warning", SensorController.listWarnings);

}
