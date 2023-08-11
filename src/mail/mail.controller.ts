import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { UserCreateDto } from 'src/users/dto/crear-usuario-dto';


@Controller('mail')
export class MailController {

    constructor(private mailService: MailService) { }

    @Post("/recover")
    async signUp(@Body() user: UserCreateDto) {
        const token = Math.floor(1000 + Math.random() * 9000).toString();
        await this.mailService.sendUserConfirmation(user, token);
    }
}