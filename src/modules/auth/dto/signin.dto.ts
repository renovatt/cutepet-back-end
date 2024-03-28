import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
  /**
   * O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da
   * rede social que estiver conectada. Login sem rede social precisa de uma senha.
   * @example nest+3@gmail.com
   */
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente
   * é necessário informar uma senha com pelos menos 8 caracteres.
   * @example 12345678
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
