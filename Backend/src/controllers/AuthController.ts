import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";

import { User } from "../entity/User";


class AuthController {
  static login = async (req: Request, res: Response) => {
    //Check if username and password are set
    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send();
    }

    //Get user from database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { username } });
    } catch (error) {
      res.status(401).send();
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );

    console.log(token)
    var decode =  jwt.verify(token, process.env.JWTSECRET);

    console.log(decode)

    //Send the jwt in the response
    res.send(token);
  };

}
export default AuthController;