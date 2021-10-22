const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

//setting up config env file variables
dotenv.config({ path: "./config/config.env" });

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));

//setting up body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup CORS - Accessible by other domains
app.use(cors({ credentials: true }));

app.get("/", function (req, res) {
    res.send("this is times project");
  });

//importing routes
const time = require("./routes/time");

app.use("/getTimeStories", time)

  //setting up hosting port
const PORT = process.env.PORT || 8080; //8000
const server = app.listen(PORT, () => {
  console.log(`server is hosted at ${PORT} in ${process.env.NODE_ENV} mode.`);
});