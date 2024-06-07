var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/failed", (req, res) => {
  req.flash("age", "17");
  req.flash("name", "Rahul");
  res.send("bangaya");
});

router.get("/checkkar", (req, res) => {
  console.log(req.flash("name")), console.log(req.flash("age"));
  res.send("check karlo terminal pe");
});

module.exports = router;
