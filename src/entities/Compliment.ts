import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import {v4 as uuid} from "uuid"
import { Tag } from "./Tag"
import { User } from "./User"

@Entity("compliments")
class Compliment{
  @PrimaryColumn()
  readonly id: string

  @Column()
  user_sender: string

  //Propriedade de navegação
  @JoinColumn({name: "user_sender"}) //Muitos elogios só podem ser enviados por 1 usuário
  @ManyToOne(() => User)
  userSender: User

  @Column()
  user_receiver: string

  //Propriedade de navegação
  @JoinColumn({name: "user_receiver"})
  @ManyToOne(() => User) //Muitos elogios só podem ser recebidos por 1 usuário
  userReceiver: User

  @Column()
  tag_id: string

  //Propriedade de navegação
  @JoinColumn({name: "tag_id"})
  @ManyToOne(() => Tag) //Muitos elogios só pertencem a 1 única tag
  tag: Tag

  @Column()
  message: string

  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export {Compliment}