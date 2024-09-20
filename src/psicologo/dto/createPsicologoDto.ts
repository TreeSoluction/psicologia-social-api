import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class createPsicologoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
  @IsString()
  @IsNotEmpty()
  telefone: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  cpf: string;
  @IsDate()
  @IsNotEmpty()
  crp: string;
}
