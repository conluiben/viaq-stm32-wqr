const {Sensor} = require('../models') //gets index.js from models
// const jwt = require('jsonwebtoken')
const config = require('../config/config')
const { Op } = require("sequelize");

const { emitMessage } = require('../utils/socket');


module.exports = {
    async update(req, res) { //triggered by Thingspeak
        /*
        var msg = "Hello, " + req.body.email + "! You are registered! :)";
        res.send({
            message: msg
        })*/
        try {
            const sensorAlert = await Sensor.create(req.body); //strictly named fields: "email" and "password"
            // console.log("sensorAlert practice (no toJSON()):")
            // console.log(sensorAlert)
            emitMessage("new warning",sensorAlert.toJSON()); //does a stringify
            // res.send(sensorAlert.toJSON())
            res.send({
                message: "success" 
            });
        } catch(err) {
            res.status(400).send(err)
        }
    },
    async listWarnings(req, res){
        //onload of the frontend, get all warnings
        try {
            const recentWarnings = await Sensor.findAll({
                attributes: [
                    "warning",
                    [Sensor.sequelize.fn('MAX', Sensor.sequelize.col('createdAt')),"lastUpdate"],
                    "parameter",
                    [Sensor.sequelize.fn('MAX',Sensor.sequelize.col('value')),'value']
                ],
                group: ["warning","parameter"],
                where: {
                    createdAt: {
                        [Op.lt]: new Date(),
                        [Op.gt]: new Date(new Date() - 30 * 60 * 1000)
                    }
                }
            })
            //! might be one day before? --> [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
            //! also by value: MAX (obtain MAX value from the last 30 minutes)
            res.send({
                allEntries: recentWarnings
            })
        } catch(error) {
            res.status(500).send(error)
        }
    }
}