import { Injectable } from '@nestjs/common';
import { createPsicologoDto } from './dto/createPsicologoDto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PsicologoService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(data: createPsicologoDto): Promise<any> {
    const register = await this.prismaClient.psicologos.create({
      data: {
        email: data.email,
        nome: data.nome,
        cpf: data.cpf,
        telefone: data.telefone,
        crp: data.crp,
      },
    });

    return register;
  }
}
