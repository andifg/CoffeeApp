import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/User";

class UserController {
  static newUser = async (req: Request, res: Response) => {
    //Get parameters from the body

    console.log(req.body);
    let { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send();
      return;
    }

    console.log(username);
    console.log(password);

    let user = new User();
    user.username = username;
    user.password = password;

    //   //Validade if the parameters are ok
    //   const errors = await validate(user);
    //   if (errors.length > 0) {
    //     res.status(400).send(errors);
    //     return;
    //   }

    //Hash the password, to securely store on DB
    user.hashPassword();

    //Try to save. If fails, the username is already in use
    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send("username already in use");
      return;
    }

    //If all ok, send 201 response
    res.status(201).send("User created");
  };
}

export default UserController;
