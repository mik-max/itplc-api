import { getHomePage } from "../controllers/home.js";
import { Router } from "express";
let homeRouter = Router();
homeRouter.get('/home', getHomePage);


export default homeRouter;