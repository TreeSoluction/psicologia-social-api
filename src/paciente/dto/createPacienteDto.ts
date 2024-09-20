import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxDate,
  MinDate,
  MinLength,
} from 'class-validator';

export class createPacienteDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  cpf: string;
  @IsNotEmpty()
  dataNascimento: Date;
}
