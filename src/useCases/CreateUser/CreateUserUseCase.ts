import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repository/UserRepository";
import {CreateUserRequestDTO} from './CreateUserDTO';

export class CreateUserUseCase {

    constructor(
        private IMailProvider: IMailProvider,
        private IUserRepository: IUsersRepository){}

    async execute(data: CreateUserRequestDTO){

      const userAlreadyExist =  await this.IUserRepository.findByEmail(data.email)

      if(userAlreadyExist){
          throw new Error("User already exist");
      }

      const user = new User(data);

      await this.IUserRepository.save(user)

      await this.IMailProvider.sendMail({
        to:{
            name:'empresa',
            email:'empresa@email.com'
        },
        from:{
            name:'empresa',
            email:'empresa@email.com'
        },
        subject:"Bem vindo a Empresa",
        body:`${data.name} Você já pode acessar nosso site`
      })
    }
}