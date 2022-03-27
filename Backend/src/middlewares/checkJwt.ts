import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {

  let jwtPayload;

  const access_token = req.cookies.access_token

  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(access_token, process.env.JWTSECRET);
    res.locals.jwtPayload = jwtPayload;
    console.log(jwtPayload)

  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).send();
    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { userId, username } = jwtPayload;
  const newToken = jwt.sign({ userId, username },process.env.JWTSECRET, {
    expiresIn: "1h"
  });
  res
    .cookie('access_token', newToken)

  next();
};