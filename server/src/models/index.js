const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require("../config/config")
const { exit } = require("process")
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

// console.log("Debugging: I made it here")

fs
    .readdirSync(__dirname)
    .filter((file) => file!=='index.js')
    .forEach((file) => {
        // ! deprecated
        // const model = sequelize.import(path.join(__dirname,file));
        // console.log("Debugging: I made it 2 at this part!")
        const model = require(path.join(__dirname,file))(sequelize, Sequelize)
        // console.log("Debugging 3: No more error!")
        // ? line above will call User.js (for now) and plug in sequelize, Sequelize to the module.exports function
        db[model.name] = model //will be db.User = model
    })
    /*
    .then(response => {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    })*/


var authorizeSequelize = async function(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

authorizeSequelize();

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db