import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"
import { ErrorHandler } from "../utils/ErrorHandler"

class ListTagByIdService{
  async execute(id: string){
    const tagsRepository = getCustomRepository(TagsRepository)

    const tag = await tagsRepository.findOne(id)

    if(!tag){
      const error = {
        name: "Not found",
        statusCode: 404,
        message: "Tag not found",
        description: "Tag not found. Try again later"
      }

      throw new ErrorHandler(error)
    }

    return tag
  }
}

export {ListTagByIdService}