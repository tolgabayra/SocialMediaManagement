import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entitys/User"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 49153,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [
        User
    ],
    subscribers: [],
    migrations: [],
})