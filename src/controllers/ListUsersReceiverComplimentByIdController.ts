import {Request, Response} from 'express'
import { ListUserReceiveComplimentByIdService } from '../services/ListUserReceiveComplimentByIdService'

class ListUsersReceiverComplimentByIdController{
  async handle(req: Request, res: Response){
    const {user_id} = req
    const id = req.params.id

    const listUsersReceiverComplimentByIdService = new ListUserReceiveComplimentByIdService()

    const compliment = await listUsersReceiverComplimentByIdService.execute(user_id, id)

    return res.json(compliment)
  }
}

export{ListUsersReceiverComplimentByIdController}