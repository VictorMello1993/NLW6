import {Request, Response} from 'express'
import { ListUserByIdService } from '../services/ListUserByIdService'

class ListUserByIdController{
  async handle(req: Request, res: Response){
    const user_id = req.params.id
    
    const listUserByIdService = new ListUserByIdService()
    
    const user = await listUserByIdService.execute(user_id)

    return res.json(user)
  }
}

export {ListUserByIdController}