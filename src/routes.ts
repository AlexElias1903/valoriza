import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";

const router = Router();

router.post("/users", CreateUserController)
router.post("/tags", CreateTagController)

export { router }
