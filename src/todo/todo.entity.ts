import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todoEN')
export class Todo {
    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number;

    @Column({
        name: 'title'
    })
    title: string;

    @Column({
        name: 'description'
    })
    description: string;

    @Column({
        name: 'completed'
    })
    completed: boolean;
}
