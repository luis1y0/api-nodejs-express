const router = require("express").Router();
const user = require("../controllers/userController");

router.get("/", (req, res) => {
  console.log("get");
  res.render("vista");
});

router.post("/users", user.saveUser, (req, res, next) => {
  console.log("USUARIO CREADO");
});

router.get("/users", user.getUsers, (req, res, next) => {
  console.log(">>> RES", res);
});

router.get("/users/:id", user.getUserById, (req, res, next) => {
  console.log(">>> RES", res);
});

router.put("/users/:id", user.updateUser, (req, res, next) => {
  console.log(">>> RES", res);
});
router.delete("/users/:id", user.deleteUser, (req, res, next) => {
  console.log(">>> RES", res);
});

module.exports = router;
