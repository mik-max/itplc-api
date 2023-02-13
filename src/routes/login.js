import { Router } from "express";
import { login } from "../controllers/login.js";
let loginRouter = Router();
loginRouter.post('/login', login);


export default loginRouter;