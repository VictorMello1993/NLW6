import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"

class ListUserSendComplimentsService{
  async execute(user_id: string){
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: {
        user_sender: user_id
    },
    relations: ['userSender', 'userReceiver', 'tag']}) //Apresentando as propriedades das entidades relacionadas na entidade Compliment        

    return classToPlain(compliments)
  }
}

export{ListUserSendComplimentsService}