import {Request, Response} from 'express'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService'

class ListUserSendComplimentsController{
  async handle(req: Request, res: Response){
    const{user_id} = req //Usuário logado

    const listUserSendComplimentService = new ListUserSendComplimentsService()

    const compliments = await listUserSendComplimentService.execute(user_id)

    return res.json(compliments)
  }
}

export {ListUserSendComplimentsController}