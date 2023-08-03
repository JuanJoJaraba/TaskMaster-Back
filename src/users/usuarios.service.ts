import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserLoginDto } from './dto/user-login-dto';
import { Users } from './modelos/usuario.entity';
import { UserCreateDto } from './dto/crear-usuario-dto';
import { UserUpdateDto } from './dto/update-usuario-dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users)
        private readonly usersModel: typeof Users,
    ) { }

    findAll(): Promise<Users[]> {
        return this.usersModel.findAll();
    }

    async insert(dto: UserCreateDto): Promise<Users> {
        return await this.usersModel.create({
            name: dto.name,
            lastName: dto.lastName,
            email: dto.email,
            password: dto.password
        }).then((response) => response).catch((error) => error);
    }

    async queryLogin(dto: UserLoginDto): Promise<Users | any> {
        let  user =  await this.usersModel.findOne({ where: { email: dto.email, password: dto.password }, attributes: ['name', 'lastName'] });
        if(user === null ){
            return {"message":"No existe el usuario"}
        }else{
            return user
        }
    }
    async updateUser(_id: number, dto: UserUpdateDto): Promise<Users | any> {
        return await this.usersModel.update(
            {
                name: dto.name,
                lastName: dto.lastName,
                email: dto.email,
                password: dto.password
            }, {
            where: { id: _id }
        }
        ).then((response) => response).catch((error) => { return { "message_error": "NOT UPDATE TASK" } });
    }
    async getAllUserForId(_id: number): Promise<Users> {
        return await this.usersModel.findOne(
            {
                where: {
                    id: _id
                }
            }
        )
    }

}
