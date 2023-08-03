import { Column, Model, Table } from "sequelize-typescript"
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
    
}