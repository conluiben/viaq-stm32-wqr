console.log("hello!");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const { socketConnection } = require('./utils/socket');

// var msg = "";

require('./routes')(app)
require('dotenv').config() //newly added; not in first-railway project! --- this made process.env.*** work!

//new: attempt to use socket.io
const server = require('http').createServer(app);
socketConnection(server);

// sequelize.sync({force: true}) //temporary force: true as it resets the database!
sequelize.sync() //temporary force: true as it resets the database!
	.then(() => {
		// ? socket.io: replace app.listen with server.listen
		// app.listen(process.env.PORT || 8081);
		// server.listen(8081);
		server.listen(process.env.PORT || 8081);
		console.log(`Server started on port ${config.port}`)
	})

