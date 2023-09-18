import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule} from './users/usuarios.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tasks',
      autoLoadModels: true,
      synchronize: true,
    }),
    TasksModule,
    UsersModule,
    MailModule,
    AuthModule,
   
   
    
    
  ],
  controllers: [],
  providers: []
  
})
export class AppModule {}
