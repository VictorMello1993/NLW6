import {Request, Response} from 'express'
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService'

class ListUserReceiveComplimentsController{
  async handle(req: Request, res: Response){
    const{user_id} = req //Usuário logado

    const listUserReceiveComplimentService = new ListUserReceiveComplimentsService()

    const compliments = await listUserReceiveComplimentService.execute(user_id)

    return res.json(compliments)
  }
}

export {ListUserReceiveComplimentsController}