import {Request, Response} from 'express'
import { ListUserSendComplimentByIdService } from '../services/ListUserSendComplimentByIdService'

class ListUsersSenderComplimentByIdController{
  async handle(req: Request, res: Response){
    const {user_id} = req
    const id = req.params.id

    const listUsersSenderComplimentByIdService = new ListUserSendComplimentByIdService()

    const compliment = await listUsersSenderComplimentByIdService.execute(user_id, id)

    return res.json(compliment)
  }
}

export{ListUsersSenderComplimentByIdController}