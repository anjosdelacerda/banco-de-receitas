import { Request, Response } from "express";
import { listUserService } from "../../services";
import { IUser } from "../../interfaces/users";

const listUserController = (req: Request, res: Response) =>{
    try{
        const listUsers: IUser[] = listUserService()
        return res.status(200).send(listUsers)
    }catch(err){
        if(err instanceof Error){
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }

    }
}

export default listUserController