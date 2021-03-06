import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

// //Get all users
// router.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);

// // Get one user
// router.get(
//   "/:id([0-9]+)",
//   [checkJwt, checkRole(["ADMIN"])],
//   UserController.getOneById
// );

//Create a new user
router.post("/", UserController.newUser);

router.get("/", checkJwt, UserController.getUser);

// //Edit one user
// router.patch(
//   "/:id([0-9]+)",
//   [checkJwt, checkRole(["ADMIN"])],
//   UserController.editUser
// );

// //Delete one user
// router.delete(
//   "/:id([0-9]+)",
//   [checkJwt, checkRole(["ADMIN"])],
//   UserController.deleteUser
// );

export default router;
