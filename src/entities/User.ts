import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid"
import {Exclude} from "class-transformer"

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;
  
  @Column()
  admin: boolean;

  //Excluindo a exibição da senha da API
  @Exclude()
  @Column()
  password: string;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export {User}

/*OBS: sempre descomentar as linhas experimentalDecorators: true e emitDecoratorMetadata: true no tsconfig.json  
       e strictPropertyInitialization": false no tsconfig.json*/