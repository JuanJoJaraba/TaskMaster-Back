import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './modelos/usuario.entity';
import { UsersController } from './usuarios.controller';
import { UsersService } from './usuarios.service';


@Module({
  imports :[ SequelizeModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}