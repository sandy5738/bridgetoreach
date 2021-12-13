const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/donate", (req, res) => {
  res.render("donate");
});
router.get("/join", (req, res) => {
  res.render("joinUs");
});

module.exports = router;
