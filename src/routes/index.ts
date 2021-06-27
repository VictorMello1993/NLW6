import { Router } from "express";
import {complimentsRoutes} from './ComplimentsRoutes'
import {usersRoutes} from './UsersRoutes'
import {tagsRoutes} from './TagsRoutes'
import {authRoutes} from './AuthenticationRoutes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/tags', tagsRoutes)
routes.use('/login', authRoutes)
routes.use('/users', usersRoutes)
routes.use('/users/compliments', complimentsRoutes)
routes.use('/compliments', complimentsRoutes)

export {routes}