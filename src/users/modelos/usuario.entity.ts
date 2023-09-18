import { Column, HasMany, Model, Table } from "sequelize-typescript"
import { Tasks } from "src/tasks/models/tasks.entity";

@Table
export class Users extends Model {

    @Column
    name: string;
    @Column
    lastName: string;
    @Column({ unique: true })
    email: string;
    @Column
    password: string;

    @HasMany(() => Tasks)
    tasks: Tasks[];
  

}