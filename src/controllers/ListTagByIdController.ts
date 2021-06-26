import {Request, Response} from 'express'
import { ListTagByIdService } from '../services/ListTagByIdService'

class ListTagByIdController{
  async handle(req: Request, res: Response){
    const id = req.params.id

    const listTagByNameService = new ListTagByIdService()
    
    const tag = await listTagByNameService.execute(id)

    return res.json(tag)
  }
}

export {ListTagByIdController}