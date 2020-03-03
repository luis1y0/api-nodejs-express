const router = require("express").Router();
const user = require("../controllers/userController");

router.get("/", (req, res) => {
  console.log("get");
  res.render("vista");
});

router.post("/users", user.saveUser, (req, res, next) => {
  console.log("USUARIO CREADO");
});

module.exports = router;
