import { Router } from "express";
import express, { Application, Request, Response } from "express";

const router = Router();

router.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);


export default router;