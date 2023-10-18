import { Router } from "express";
import { register, login } from "../controller/user.controller";

const router = Router();

router.post("/registration", register);

router.post("/login", login);

export default router;
