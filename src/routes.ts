import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

router.post("/users", CreateUserController)
router.post("/tags", ensureAdmin, CreateTagController)

export { router }
