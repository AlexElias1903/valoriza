import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export async function CreateUserController(request: Request, response: Response) {
    console.log(request)
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, admin });

    return response.json(user);


}


