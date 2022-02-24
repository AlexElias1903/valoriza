import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

console.log(CreateUserController)
router.post("/dale", CreateUserController)

export { router }
