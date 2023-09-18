import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { Users } from "src/users/modelos/usuario.entity"

@Table
export class Tasks extends Model {

    @Column({ unique: true })
    title: string

    @Column
    datetime: Date

    @Column
    priority: string

    @Column
    status: string

    @Column
    description: string

    @ForeignKey(() => Users)
    @Column
    userId: number;

    @BelongsTo(() => Users)
    user: Users;

}