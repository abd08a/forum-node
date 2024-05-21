import express from "express";
import { REGISTER, LOGIN } from "../controllers/user.js";

const router = express.Router();

router.post("/users/register", REGISTER);
router.post("/users/login", LOGIN);

export default router;
