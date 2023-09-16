import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/users/modelos/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users)
    private readonly usuarioModel: typeof Users) { }

 
}