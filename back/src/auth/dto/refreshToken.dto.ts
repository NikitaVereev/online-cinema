import { IsString } from 'class-validator'

export class RefreshTokenDto {
	@IsString({
		message: 'Токен не является строкой!',
	})
	refreshToken: string
}
