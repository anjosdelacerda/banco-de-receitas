export interface IUserRequest {
    name: string 
    email: string
    password: string 
    phone: string 
    isAdm: boolean
}

export interface IUser extends IUserRequest{
    id: string
}

export interface IUserResponse {
    id: string
    name: string 
    email: string
    phone: string 
    isAdm: boolean
}