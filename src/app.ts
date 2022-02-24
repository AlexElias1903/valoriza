import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import bodyParser from 'body-parser';

import "./database";

const app = express();
app.set('port',8080)
app.use(bodyParser.json());
app.use(router);

export default app;