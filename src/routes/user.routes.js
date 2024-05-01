import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = Router();

router.route("/register").post(registerUser)

//we can import it like registerUser only when export default is not there


export default router;

