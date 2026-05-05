import { Router } from "express";
import { getHome, getAbout} from "../controllers/user.controllers.js"
const router = Router()

router.get("/", getHome).get( "/about", getAbout)

export default router;