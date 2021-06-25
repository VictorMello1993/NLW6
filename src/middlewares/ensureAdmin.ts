import {Request, Response, NextFunction} from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

export async function ensureAdmin(req: Request, res: Response, next: NextFunction){  
  const {user_id} = req

  const usersRepository = getCustomRepository(UsersRepository)

  const {admin} = await usersRepository.findOne(user_id)  
  
  //Verificando se usuário é admin
  if(admin){
    return next()
  }

  return res.status(401).json({error: 'Unauthorized'}) //ERRO 401 => UNAUTHORIZED => USUÁRIO NÃO TEM AUTORIZAÇÃO!
}