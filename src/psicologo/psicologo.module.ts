import { Module } from '@nestjs/common';
import { PsicologoService } from './psicologo.service';
import { PrismaClient } from '@prisma/client';
import { PsicologoController } from './psicologo.controller';

@Module({
  providers: [PsicologoService, PrismaClient],
  controllers: [PsicologoController],
})
export class PsicologoModule {}
