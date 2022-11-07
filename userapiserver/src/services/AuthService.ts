import { AppDataSource } from "../data-source";
import { User } from "../entitys/User";


export class AuthService{
    private userRepository = AppDataSource.getRepository(User)

   
    public Login(email:string, password:string) {
        
    }

    public Register(data: User){
        return this.userRepository.save(data)

    }
}