import {Router} from 'express'
import { CreateTagController } from '../controllers/CreateTagController'
import { ListTagsController } from '../controllers/ListTagsController'
import { ListTagByIdController } from '../controllers/ListTagByIdController'
import {ensureAuthenticated} from '../middlewares/ensureAuthenticated'
import {ensureAdmin} from '../middlewares/ensureAdmin'

const createTagController = new CreateTagController()
const listTagsController = new ListTagsController()
const listTagByIdController = new ListTagByIdController()

const tagsRoutes = Router()

tagsRoutes.post('/', ensureAuthenticated, ensureAdmin, createTagController.handle)
tagsRoutes.get('/', ensureAuthenticated, listTagsController.handle)
tagsRoutes.get('/:id', ensureAuthenticated, listTagByIdController.handle)

export{tagsRoutes}