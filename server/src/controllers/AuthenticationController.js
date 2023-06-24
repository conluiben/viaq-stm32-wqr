const {User} = require('../models') //gets index.js from models
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user){
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        /*
        var msg = "Hello, " + req.body.email + "! You are registered! :)";
        res.send({
            message: msg
        })*/
        try {
            const user = await User.create(req.body) //strictly named fields: "email" and "password"
            res.send(user.toJSON())
        } catch(err) {
            res.status(400).send({
                error: "This email is already in use!"
            })
        }
    },
    async login(req, res) {
        try {
            const {email,password} = req.body // * NOTE: variable names strict based on JSON Format; must follow what's in the SQL table!
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if(!user){
                return res.status(403).send({error: "Incorrect login information! (username!)"})
            }

            console.log("is user invalid:",(!user))
            console.log("run 2. passwords: ",password,user.password)
            
            const isPasswordValid = (password === user.password)
            if(!isPasswordValid){
                return res.status(403).send({error: "Incorrect login information (password!)"})
            }

            console.log("run 3")

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch(err) {
            res.status(500).send({ // server error 500
                // error: "A login error has occurred!"
                error: JSON.stringify(err)
            })
        }
    }
}