const router = require("express").Router();
const EventController = require("../controller/event.controller");

router.post("/addevent", EventController.addEvent);

router.post("/getevents", EventController.getEvent);

module.exports = router;
