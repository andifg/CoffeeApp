import { Router, Request, Response } from "express";
import user from "./user";
import system from "./system"
import auth from "./auth"

const routes = Router();

routes.use("/user", user);

routes.use("/auth",auth)

routes.use("/",system)

export default routes;