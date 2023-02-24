import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Неверно указан email' })
	email: string;

	@IsString({ message: 'НЕ указан пароль' })
	password: string;

	@IsString({ message: 'НЕ указано имя' })
	name: string;
}
