const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Book = require("./models/BookModel");

let connectionString =
  "mongodb+srv://admin:admin@cluster0-smkop.azure.mongodb.net/library?retryWrites=true&w=majority";

if (process.env.NODE_ENV === "test") {
  console.log("This is test");
  connectionString =
    "mongodb+srv://admin:admin@cluster0-smkop.azure.mongodb.net/library_test?retryWrites=true&w=majority";
}

console.log(connectionString);
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connection created successfully"))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 3001;

const bookRouter = require("./routes/bookRouter")(Book);

app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Nodemon API!!");
});

app.server = app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

module.exports = app;
