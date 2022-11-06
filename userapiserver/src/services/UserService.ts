import { AppDataSource } from "../data-source";
import { User } from "../entitys/User";



export class UserService {
    private userRepository = AppDataSource.getRepository(User)

    /**
     * create
     */
    public create(data: User) {
        return this.userRepository.save(data)
    }

    /**
     * delete
     */
    public delete(id: number) {
        const nowUser = this.userRepository.findOneBy({
            id: id
        })
        return this.userRepository.remove(nowUser as any)
    }

    /**
     * update
     */
    public update(id: number, data: User) {
        const nowUser = this.userRepository.findOneBy({
            id: id
        })

        return this.userRepository.save({
            ...nowUser,
            ...data
        })
    }

    /**
     * show
     */
    public show(id: number) {
        return this.userRepository.findOneBy({
            id: id
        })       
    }

    /**
     * list
     */
    public list() {
        return this.userRepository.find()
    }
}