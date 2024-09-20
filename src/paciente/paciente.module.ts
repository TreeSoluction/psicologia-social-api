import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [PacienteService, PrismaClient],
  controllers: [PacienteController],
})
export class PacienteModule {}
