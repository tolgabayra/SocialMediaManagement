import { User } from "../../src/entitys/User";

declare global{
    namespace Express {
        interface Request {
            user: UserModel
        }
    }
}
