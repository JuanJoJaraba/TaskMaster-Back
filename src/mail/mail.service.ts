import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/users/dto/crear-usuario-dto';



@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }

    async sendUserConfirmation(user: UserCreateDto, token: string) {
        const url = `example.com/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            from: '"Support Team" <eduardo.enyoi.support@endtest-mail.io>', // override default from
            subject: 'Recuperar contraseña',
            template: './recovery', // `.hbs` extension is appended automatically
            context: {
                name: user.name,
                url,
            },
        });
    }
}