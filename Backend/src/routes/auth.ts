import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router = Router();
//Login route
router.post("/", AuthController.login);

// //Change my password
// router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;