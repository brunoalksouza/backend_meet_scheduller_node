import { Router } from "express";
import { addEvent, getEvent } from "../controller/event.controller";

const router = Router();

router.post("/addevent", addEvent);

router.get("/getevents", getEvent);

export default router;
