import express, { Application, Request, Response } from "express";
import { setgroups } from "process";
import { createConnection } from "typeorm";
import routes from "./routes/index";
import  cookieParser from "cookie-parser";


( async () => {
  try {
    const app: Application = express();
    const port = 3000;

    // Body parsing Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use("/", routes);

    await createConnection();

    app.listen(port, (): void => {
      console.log(`Connected successfully on port ${port}`);
    });
  } catch (error) {
    console.error(`Error occured: ${error}`);
  }
})();
