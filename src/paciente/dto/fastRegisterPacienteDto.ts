import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class fastRegisterPacienteDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  cpf: string;
}
