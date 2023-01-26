console.log("hello!");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req,res) => {
	res.send({
		message: "Hello World"
	})
});

app.post("/register", (req,res) => {
	res.send({
		message: `Hello, ${req.body.email}! You are registered! :)`
	})
});

//important: use backticks if containing JS expressions!


app.listen(process.env.PORT || 8081);