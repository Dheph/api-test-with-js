import { User } from '../../entities/User';
import {IUserRepository} from '../../repositories/IUsersRepository';
import { CreateUserRequestDTO } from './createUserDTO';
;

export class CreateUserUseCase {
    
    constructor(
       private userRepository : IUserRepository //private realiza a instancia do userRepository
    ){}
    async execute(data:CreateUserRequestDTO){
        const userAlreadyExist = await this.userRepository.findByEmail(data.email)
        
        if(userAlreadyExist){
            throw new Error("User already exist");
        }

        const user = new User(data);

        await this.userRepository.save(user);
    
    
    }
}