import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Column()
    username!: string

    @Column()
    email!: string

    @Column()
    password!: string

  
}