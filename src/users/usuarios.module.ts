import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './modelos/usuario.entity';
import { UsersController } from './usuarios.controller';
import { UsersService } from './usuarios.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports :[SequelizeModule.forFeature([Users]),
  JwtModule.register({
    global: true,
    secret: "123",
    signOptions: { expiresIn: '120s' },
  }),],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}