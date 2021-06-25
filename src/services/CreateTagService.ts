import { getCustomRepository } from "typeorm"
import {TagsRepository} from '../repositories/TagsRepository'

class CreateTagService{
  async execute(name: string){
    const tagsRepository = getCustomRepository(TagsRepository)

    if(!name){
      throw new Error('Incorrect Name!')
    }

    const tagAlreadyExists = await tagsRepository.findOne({name})

    if(tagAlreadyExists){
      throw new Error('Tag already exists!')
    }

    const newTag = tagsRepository.create({name})

    await tagsRepository.save(newTag)

    return newTag
  }
}

export{CreateTagService}