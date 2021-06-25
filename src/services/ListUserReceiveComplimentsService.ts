import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"

class ListUserReceiveComplimentsService{
  async execute(user_id: string){
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: {
        user_receiver: user_id
    },
    relations: ['userSender', 'userReceiver', 'tag']}) //Apresentando as propriedades das entidades relacionadas na entidade Compliment

    return compliments
  }
}

export{ListUserReceiveComplimentsService}