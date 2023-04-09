const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require("../config/config")
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

fs
    .readdirSync(__dirname)
    .filter((file) => file!=='index.js')
    .forEach((file) => {
        // ! deprecated
        // const model = sequelize.import(path.join(__dirname,file));
        const model = require(path.join(__dirname,file))(sequelize, Sequelize)
        // ? line above will call User.js (for now) and plug in sequelize, Sequelize to the module.exports function
        db[model.name] = model //will be db.User = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db