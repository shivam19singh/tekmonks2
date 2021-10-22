const express = require("express");
const router = express.Router();

// router.get("/",(req,res)=>{
//     res.send("this is times route page")
// })

const {
    getStories
  } = require("../Controllers/timeController");

  router.route("/").get(getStories);

module.exports = router;