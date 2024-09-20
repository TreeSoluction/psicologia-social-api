import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createPacienteDto } from './dto/createPacienteDto';
import { fastRegisterPacienteDto } from './dto/fastRegisterPacienteDto';

@Injectable()
export class PacienteService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(data: createPacienteDto): Promise<any> {
    const dataNasc = new Date(data.dataNascimento);

    const dataMinima = new Date(
      new Date().getFullYear() - 18,
      new Date().getMonth(),
      new Date().getDay(),
    );

    if (dataNasc > dataMinima) {
      return { messages: 'Paciente menor de idade' };
    }

    const register = await this.prismaClient.pacientes.create({
      data: {
        email: data.email,
        nome: data.nome,
        cpf: data.cpf,
        data_nascimento: new Date(data.dataNascimento).toISOString(),
      },
    });

    return register;
  }

  async fastCreate(data: fastRegisterPacienteDto): Promise<any> {
    const register = await this.prismaClient.pacientes.create({
      data: {
        email: data.email,
        cpf: data.cpf,
        nome: 'SEM NOME',
        data_nascimento: new Date().toISOString(),
      },
    });

    return register;
  }

  async update(id: string, data: createPacienteDto): Promise<any> {
    const update = await this.prismaClient.pacientes.update({
      where: { id: parseInt(id) },
      data: {
        email: data.email,
        nome: data.nome,
        cpf: data.cpf,
        data_nascimento: new Date(data.dataNascimento).toISOString(),
      },
    });

    return update;
  }

  async delete(id: string): Promise<any> {
    await this.prismaClient.pacientes.delete({
      where: { id: parseInt(id) },
    });

    return;
  }

  async get(): Promise<any> {
    const result = await this.prismaClient.pacientes.findMany({});
    return result;
  }
}
