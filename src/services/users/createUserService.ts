import { IUserRequest, IUser, IUserResponse } from "../../interfaces/users";
import { users } from "../../database";
import {v4 as uuid} from "uuid"
import emailAlreadyExists from "../../utils/user/emailAlreadyExists";
import excludePasswordUser from "../../utils/user/excludePasswordResponseUser";

const createUserService = ({name, email, password, phone, isAdm}:IUserRequest): IUserResponse =>{
    const repeatedEmail = emailAlreadyExists(email)
    if(repeatedEmail){
        throw new Error("email already exists")
    }
    const newUser: IUser = {
        id: uuid(),
        name,
        email,
        password,
        phone,
        isAdm
    }
    users.push(newUser)
    const userWithoutPassword: IUserResponse = excludePasswordUser(newUser)
    return userWithoutPassword
}

export default createUserService