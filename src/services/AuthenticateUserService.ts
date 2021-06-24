import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IAuthenticateRequest{
  email: string;
  password: string;
}

class AuthenticateUserService{
  async execute({email, password}: IAuthenticateRequest){
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne({email})

    if(!user){
      throw new Error("Email/Password incorrect")
    }

    const passwordMatch =  await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("Email/Password incorrect")
    }

    //Gerando token JWT
    //sign(payload (email, tempo de expiração do token e o usuário de destino à qual o token lhe pertence), chaveSecreta)
    //A chave secreta pode ser gerada por vários tipos de algoritmos de criptografia como MD5, SHA256, entre outros
    const token = sign({
      email: user.email
    }, "cce5186f4473aeefda6da0f6fcee6014", 
    {
      subject: user.id,
      expiresIn: "1d" //1d => 1 dia 
    })

    return token
  }
}

export {AuthenticateUserService}