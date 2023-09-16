import {Column, Model, Table} from "sequelize-typescript"

@Table
export class Tasks extends Model {

    @Column({unique: true })
    title: string 

    @Column
    datetime: Date

    @Column
    priority: string

    @Column
    status: string

    @Column
    description: string 
}