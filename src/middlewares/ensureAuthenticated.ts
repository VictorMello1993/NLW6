import {Request, Response, NextFunction} from 'express'
import {verify} from 'jsonwebtoken'
import {jwtConfig} from '../configs/auth'

interface IPayload{
  sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
  //Receber o token
  const authToken = req.headers.authorization
  
  //Validar se o token está preenchido
  if(!authToken){
    return res.status(401).end()
  }
  
  //Isolando o Bearer Token
  const [, token] = authToken.split(' ')

  try {
    //Validar se o token é válido    
    const {sub} = verify(token, jwtConfig.secret) as IPayload
    
    /*Se o token é válido, decodificá-lo e passar o id do usuário que foi preenchida do subject do token (sub) 
    para a requisição, de forma que seja possível percorrer por outras rotas ou middlewares que necessitem
    dessa informação.*/

    //Recuperar informações do usuário pelo id
    req.user_id = sub
    
    return next()

  } catch (error) {
    return res.status(401).end()
  }
}