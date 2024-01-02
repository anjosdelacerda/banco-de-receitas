import { users } from "../../database"

const emailAlreadyExists = (email: string): boolean =>{
    const findEmail = users.find((user) => user.email === email)
    if(findEmail){
        return true
    }
    return false
}

export default emailAlreadyExists