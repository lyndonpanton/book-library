const bodyParser = require("body-parser");
const cors = require("cors");
// const dotenv = require("dotenv");
const express = require("express");
const mysql = require("mysql2");

const app = express();
// dotenv.config();
const hostname = "127.0.0.1";
const PORT = process.env.PORT || 3001;

// const db = mysql.createConnection({
//     host: "http://localhost",
//     user: "root",
//     password: "",
//     database: ""
// });

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
