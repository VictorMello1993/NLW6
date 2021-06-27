import {Router} from 'express'
import { CreateUserController } from '../controllers/CreateUserController'
import { ListUserByIdController } from '../controllers/ListUserByIdController'
import { ListUsersController } from '../controllers/ListUsersController'
import {ensureAuthenticated} from '../middlewares/ensureAuthenticated'

const createUserController = new CreateUserController()
const listUserByIdController = new ListUserByIdController()
const listUsersController = new ListUsersController()

const usersRoutes = Router()

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/', ensureAuthenticated, listUsersController.handle)
usersRoutes.get('/:id', ensureAuthenticated, listUserByIdController.handle)

export{usersRoutes}
