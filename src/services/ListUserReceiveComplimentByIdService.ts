import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"
import { ErrorHandler } from "../utils/ErrorHandler"

class ListUserReceiveComplimentByIdService{
  async execute(user_id: string, id: string){
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.findOne({
      where: {
        user_receiver: user_id,
        id
      },
      relations: ['userSender', 'userReceiver', 'tag']}) //Apresentando as propriedades das entidades relacionadas na entidade Compliment        

      if(!compliments){
        const error = {
          name: "Not found",
          statusCode: 404,
          message: "No compliment was found",
          description: "No compliment was found. Try again later"
        }
  
        throw new ErrorHandler(error)
      }

      return classToPlain(compliments)
    }
  }

export {ListUserReceiveComplimentByIdService}