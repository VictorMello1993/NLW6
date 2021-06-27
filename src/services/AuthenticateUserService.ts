import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"
import { ErrorHandler } from "../utils/ErrorHandler";
import {jwtConfig} from '../configs/auth'

interface IAuthenticateRequest{
  email: string;
  password: string;
}

class AuthenticateUserService{
  async execute({email, password}: IAuthenticateRequest){
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne({email})    

    if(!user){      
      const error = {
        name: "Invalid data",
        statusCode: 400,
        message: "Email/Password incorrect",
        description: "Email/Password incorrect"
      }

      throw new ErrorHandler(error)
    }

    const passwordMatch =  await compare(password, user.password)

    if(!passwordMatch){
      const error = {
        name: "Invalid data",
        statusCode: 400,
        message: "Email/Password incorrect",
        description: "Email/Password incorrect"
      }

      throw new ErrorHandler(error)
    }

    //Gerando token JWT
    //sign(payload (email, tempo de expiração do token e o usuário de destino à qual o token lhe pertence), chaveSecreta)
    //A chave secreta pode ser gerada por vários tipos de algoritmos de criptografia como MD5, SHA256, entre outros
    const token = sign({
      email: user.email
    }, jwtConfig.secret, 
    {
      subject: user.id,
      expiresIn: jwtConfig.expiresIn
    })

    return token
  }
}

export {AuthenticateUserService}