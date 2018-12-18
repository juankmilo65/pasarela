var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("paysuccess", { message: "We have a deal now!!" });
});

module.exports = router;
