import { Request, Response } from "express";
import { AuthService } from "../services/AuthService"
import { Helper } from "../scripts/Helper";

export class AuthController {

    private authService = new AuthService
    private helper = new Helper

    public async LoginUser(req: Request, res: Response) {
        
    }

    public async RegisterUser(req: Request, res: Response){
        try {                      
            const password = this.helper.HashPassword(req.body.password)
            
            const userData = {
                id: req.body.id,
                username: req.body.username,
                email: req.body.email,
                password: password
            }
            console.log(userData);
            
            const newUser = await this.authService.Register(userData)
            res.status(201).json(newUser)
        } catch (error) {
            console.log(error);
            
            res.status(500).json(error)
        }
    }
}