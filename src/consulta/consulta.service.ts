import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ConsultaService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async requestMeeting(): Promise<any> {
    const quantidadeDePsicologs = await this.prismaClient.psicologos.count();
    const randomNumber = Math.floor(Math.random() * quantidadeDePsicologs);
    console.log(randomNumber);

    const psicologo = (await this.prismaClient.psicologos.findMany({}))[
      randomNumber
    ];

    return {
      nome: psicologo.nome,
      crp: psicologo.crp,
      telefone: psicologo.telefone,
    };
  }
}
