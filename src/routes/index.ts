import { Router } from "express"
import user from "./userRoutes"

const routes = Router()

routes.use(user)

export default routes