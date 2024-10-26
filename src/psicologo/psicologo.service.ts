import { Injectable } from '@nestjs/common';
import { createPsicologoDto } from './dto/createPsicologoDto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PsicologoService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll(): Promise<any> {
    const result = await this.prismaClient.psicologos.findMany();
    return result;
  }

  async getById(id: number): Promise<any> {
    const result = await this.prismaClient.psicologos.findFirst({
      where: { id: id },
    });
    return result;
  }

  async getRandomPsicologo(): Promise<any> {
    const psicologos = await this.prismaClient.psicologos.findMany({
      where: { active: true },
    });
    const randomIndex = Math.floor(Math.random() * psicologos.length);
    return psicologos[randomIndex];
  }

  async create(data: createPsicologoDto): Promise<any> {
    const register = await this.prismaClient.psicologos.create({
      data: {
        email: data.email,
        nome: data.nome,
        telefone: data.telefone,
        crp: data.crp,
      },
    });

    return register;
  }

  async deactive(email: string): Promise<any> {
    const register = await this.prismaClient.psicologos.updateMany({
      where: { email: email },
      data: { active: false },
    });

    return register;
  }

  async active(email: string): Promise<any> {
    const register = await this.prismaClient.psicologos.updateMany({
      where: { email: email },
      data: { active: true },
    });

    return register;
  }
}
