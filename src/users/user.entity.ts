import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    name: string;
    @Column({ type: "date", default: () => 'CURRENT_TIMESTAMP'})
    birthday: Date;
    @Column()
    gender: string;
}