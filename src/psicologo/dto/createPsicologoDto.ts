import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class createPsicologoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;
  @IsString()
  @IsNotEmpty()
  telefone: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(11)
  cpf: string;
  @IsNotEmpty()
  @MinLength(7)
  @MaxLength(7)
  crp: string;
}
