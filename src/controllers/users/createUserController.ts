import { Request, Response } from "express";
import { createUserService } from "../../services";
import { IUserResponse } from "../../interfaces/users";

const createUserController = (req: Request, res: Response) =>{
    try{
        const {name, email, password, phone, isAdm} = req.body 
        const user: IUserResponse = createUserService({name, email, password, phone, isAdm})
        return res.status(201).send(user)
    }catch(err){
        if(err instanceof Error){
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }

    }
}

export default createUserController