import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"

class ListUserSendComplimentsService{
  async execute(user_id: string){
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: {
        user_sender: user_id
    }})

    return compliments
  }
}

export{ListUserSendComplimentsService}