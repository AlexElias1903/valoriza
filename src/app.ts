import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import bodyParser from 'body-parser';
import "./database";

const app = express();
app.set('port', 8080)
app.use(bodyParser.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

export default app;