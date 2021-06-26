import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"
import {classToPlain} from "class-transformer"

class ListUserReceiveComplimentsService{
  async execute(user_id: string){
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: {
        user_receiver: user_id
    },
    relations: ['userSender', 'userReceiver', 'tag']}) //Apresentando as propriedades das entidades relacionadas na entidade Compliment        

    return classToPlain(compliments) 
  }
}

export{ListUserReceiveComplimentsService}