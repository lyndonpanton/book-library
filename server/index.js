const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
const hostname = "127.0.0.1";
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    console.log(process.env.PORT);
    res.send("Homepage");;
});

app.listen(PORT, hostname, function (req, res) {
    console.log("Listening at http://%s:%s...", hostname, PORT);
});
