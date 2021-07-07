/** @format */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//connecting to db
try {
  mongoose.connect(
    "mongodb://localhost/YOUR_DB_NAME",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connected")
  );
} catch (error) {
  console.log("could not connect");
}

// importing routes
const postRoute = require("./routes/posts");
app.use("/post", postRoute);

//MIDDLEWARE

//ROUTES
app.get("/home", (req, res) => {
  res.send("we are on the home page");
});

app.get("/post", (req, res) => {
  res.send("we are on the post page");
});

// How to start listening to the sever
app.listen(3000, () => {
  console.log("sever is running on port: " + PORT);
});
