import { classToPlain } from 'class-transformer';
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { ErrorHandler } from "../utils/ErrorHandler";

class ListUserByIdService {
  async execute(user_id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({
      where: {
        id: user_id,
      },
    });    

    if(!user){
      const error = {
        name: "Not found",
        statusCode: 404,
        message: "User not found",
        description: "User not found. Try again later"
      }

      throw new ErrorHandler(error)
    }

    return classToPlain(user)
  }
}

export { ListUserByIdService };
