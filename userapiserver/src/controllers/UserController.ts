import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import redisClient from '../scripts/Redis';


interface User {
    id: Number,
    name: String,
    description: String
}


export class UserController {


    private userService = new UserService;

    /**
     * createUser
     */
    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {

            const newUser = await this.userService.create(req.body)

            //Set redis cache
            await redisClient.set("users", JSON.stringify(newUser))
            res.status(201).json(newUser)
        } catch (Error) {
            console.log(Error);

            res.status(500).json(Error)
        }
    }

    /**
     * deleteUser
     */
    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            await this.userService.delete(req.params.id)
            res.status(200).json({ "message": "User has been deleted." })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    /**
     * updateUser
     */
    public updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const data = req.body
            await this.userService.update(req.params.id, data)
            res.status(200).json({ "message": "User has been updated" })
        } catch (error) {
            console.log(error);

            res.status(500).json(error)
        }
    }

    /**
     * getUser
     */
    public getUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService.show(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    /**
     * getAllUser
     */
    public getAllUser = async (req: Request, res: Response): Promise<void> => {
        try {

            //Get data from redis cache
            const cacheResults = await redisClient.get("users")

            //const allUser = await this.userService.list()
            res.status(200).json(cacheResults)
        } catch (error) {
            res.status(500).json(error)
        }
    }








}