import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Users } from 'src/users/modelos/usuario.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from 'src/users/usuarios.service';

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  controllers: [AuthController],
  providers: [UsersService]
})
export class AuthModule {}
