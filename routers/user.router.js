const router = require("express").Router();
const UserController = require("../controller/controller");

router.post("/registration", UserController.register);

router.post("/login", UserController.login);

router.post("/addevent", UserController.addEvent);

module.exports = router;