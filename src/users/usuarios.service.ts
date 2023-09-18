import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { Users } from './modelos/usuario.entity';
import { UserCreateDto } from './dto/crear-usuario-dto';
import { UserUpdateDto } from './dto/update-usuario-dto';
import { AuthDto } from 'src/auth/dto/create-auth.dto';

var md5 = require('md5');
@Injectable()
export class UsersService {
    create(user: { name: string; lastName: string; email: string; password: string; }) {
      throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel(Users)
        private readonly usersModel: typeof Users,
        private jwtService: JwtService) { }


    findAll(): Promise<Users[]> {
        return this.usersModel.findAll();
    }

    async insert(dto: UserCreateDto): Promise<Users> {
        return await this.usersModel.create({
            name: dto.name,
            lastName: dto.lastName,
            email: dto.email,
            password: md5(dto.password)
        }).then((response) => response).catch((error) => error);
    }


    async queryLogin(authDto: AuthDto) {
        let user = await this.usersModel.findOne({
            where: {
                email: authDto.email,
                password: md5(authDto.password)
            }

        })
        if (user === null || user ===undefined) {
            throw new UnauthorizedException();
        } const payload = { name: user.name, email: user.email, id: user.id };
        return {
            token: await this.jwtService.signAsync(payload), name: user.name, id: user.id
        };
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
