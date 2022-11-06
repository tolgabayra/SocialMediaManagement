import { Request, Response } from "express";
import { UserService } from "../services/UserService";


    
interface User{
    id: Number,
    name: String,
    description: String

    
}


export class UserController {


    private userService = new UserService

    /**
     * createUser
     */
    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            console.log(req);
            
            const newUser = await this.userService.create(req.body)            
            res.status(201).json(newUser)
        } catch (Error) {
            console.log(Error);
            
            res.status(500).json(Error)
        }
    }




}