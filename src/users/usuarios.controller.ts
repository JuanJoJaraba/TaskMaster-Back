import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './usuarios.service';
import { Users } from './modelos/usuario.entity';
import { UserCreateDto } from './dto/crear-usuario-dto';
import { UserUpdateDto } from './dto/update-usuario-dto';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) { }

    @Get()
    getAllUsers(): Promise<Users[] | any> {
        return this.service.findAll()
    }

    @Post()
    createUser(@Body() createUser: UserCreateDto): Promise<Users | any> {
        return this.service.insert(createUser)
    }

    @Get("/:id")
    async getUserForId(@Param() params: any): Promise<Users> {
        return await this.service.getAllUserForId(params.id)
    }

    @Put("/:id")
    async updateUser(@Param() params: any, @Body() dto: UserUpdateDto): Promise<Users> {
        return await this.service.updateUser(params.id , dto)
    }
}