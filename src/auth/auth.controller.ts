import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from 'src/users/usuarios.service';
import { AuthDto } from './dto/create-auth.dto';



@Controller('auth')
export class AuthController {
    constructor(private authService: UsersService) { }

    @Post("login")
    async login(@Body() authDto: AuthDto) : Promise<any> {
        return this.authService.queryLogin(authDto)
        
    }
}
