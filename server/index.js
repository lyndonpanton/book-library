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
    const sqlInsert = 
        "INSERT INTO book_library (isbn, title, author, release_year, cover_url, total_pages) VALUES ("
            + "9780765318411, "
            + "'Boneshaker', "
            + "'Cherie Priest', "
            + "2009, "
            + "'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1433161048i/1137215.jpg', "
            + "416"
        + ");";
    
    db.query(sqlInsert, function (err, result) {
        if (err) throw err;

        console.log("New book added");
    })

    res.send("Homepage");
});

app.post("/api/insert", function (req, res) {

});

app.get("/api/select", function (req, res) {

});

app.put("/api/update", function (req, res) {

});

app.delete("/api/delete", function (req, res) {

});

app.listen(PORT, hostname, function (req, res) {
    console.log("Listening at http://%s:%s...", hostname, PORT);
});
