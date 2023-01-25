import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'user'})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    mailAddress: string;

    @Column()
    password: string;

    @Column({default: true})
    isActive: boolean;

}