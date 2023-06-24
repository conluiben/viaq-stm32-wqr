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

// var msg = "";

require('./routes')(app)

//important: use backticks if containing JS expressions!

sequelize.sync()
	.then(() => {
		app.listen(process.env.PORT || 8081);
		console.log(`Server started on port ${config.port}`)
	})

