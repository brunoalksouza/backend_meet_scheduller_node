const router = require("express").Router();
const EventController = require("../controller/event.controller");

router.post("/addevent", EventController.addEvent);

module.exports = router;
