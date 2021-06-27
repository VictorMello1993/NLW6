import {Router} from 'express'
import { CreateComplimentController } from '../controllers/CreateComplimentController'
import { ListUserSendComplimentsController } from '../controllers/ListUserSendComplimentsController'
import { ListUserReceiveComplimentsController } from '../controllers/ListUserReceiveComplimentsController'
import { ListUsersSenderComplimentByIdController } from '../controllers/ListUsersSenderComplimentByIdController'
import {ListUsersReceiverComplimentByIdController } from '../controllers/ListUsersReceiverComplimentByIdController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUsersSenderComplimentByIdController = new ListUsersSenderComplimentByIdController()
const listUsersReceiverComplimentByIdController = new ListUsersReceiverComplimentByIdController()

const complimentsRoutes = Router()

complimentsRoutes.post('/', ensureAuthenticated, createComplimentController.handle)
complimentsRoutes.get('/send', ensureAuthenticated, listUserSendComplimentsController.handle)
complimentsRoutes.get('/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle)
complimentsRoutes.get('/send/:id', ensureAuthenticated, listUsersSenderComplimentByIdController.handle)
complimentsRoutes.get('/receive/:id', ensureAuthenticated, listUsersReceiverComplimentByIdController.handle)

export {complimentsRoutes}