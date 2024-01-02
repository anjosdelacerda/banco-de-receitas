import { IUser, IUserResponse } from "../../interfaces/users";
import _ from "lodash"

const excludePasswordUser = (user: IUser): IUserResponse =>{
    const cloneUser: IUser = _.cloneDeep(user)
    console.log(cloneUser)
    const responseUser: IUserResponse = _.omit(cloneUser, "password")
    return responseUser
}

export default excludePasswordUser