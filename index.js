const express = require("express");
const path = require("path");
port = 8000;
const app = express();
const dotenv = require("dotenv");
const db = require('./config/mongoose')
const bodyParser = require("body-parser");

// =============== dotEnv configuration and dataBase connection call ====================

// urlEncoded
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./assets"));

// ======= EJS ========
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Load Router
app.use("/", require("./routes/index"));

app.listen(port, function(err) {
   if (err) {
       console.log(`error in running the ${port}`)
       return;
   }
   console.log(`Server is running @ ${port}`)
})
