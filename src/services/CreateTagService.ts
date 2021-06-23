import { getCustomRepository } from "typeorm"
import {TagsRepositories} from '../repositories/TagsRepositories'

class CreateTagService{
  async execute(name: string){
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if(!name){
      throw new Error('Incorrect Name!')
    }

    const tagAlreadyExists = await tagsRepositories.findOne({name})

    if(tagAlreadyExists){
      throw new Error('Tag already exists!')
    }

    const newTag = tagsRepositories.create({name})

    await tagsRepositories.save(newTag)

    return newTag
  }
}

export{CreateTagService}