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
    res.send("Homepage");
});

app.post("/api/insert", function (req, res) {
    const isbn = req.body.isbn;
    const title = req.body.title;
    const author = req.body.author;
    const release_year = req.body.release_year;
    const cover_url = req.body.cover_url;
    const total_pages = req.body.total_pages;

    // current_page, is_complete...
    
    const sqlInsert = 
        "INSERT INTO book_library (isbn, title, author, release_year, cover_url, total_pages) VALUES ("
            + "?, "
            + "'?', "
            + "'?', "
            + "?, "
            + "'?', "
            + "?"
        + ");";
    
    db.query(sqlInsert, [





        
        ], function (err, result) {
            if (err) throw err;

            console.log("New book added");
    });
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
