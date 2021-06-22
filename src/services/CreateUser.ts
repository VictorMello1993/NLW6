import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest{
  name: string,
  email: string,
  admin?: boolean
}

class CreateUserService{
  async execute({name, email, admin}: IUserRequest){
    const usersRepository = new UsersRepository();

    if(!email){
      throw new Error("Email incorrect")
    }

    const userAlreadyExists = await usersRepository.findOne({email});
    
    if(userAlreadyExists){
      throw new Error("User already exists")
    }

    const newUser = usersRepository.create({name, email, admin})

    await usersRepository.save(newUser)

    return newUser
  }
}

export{CreateUserService}