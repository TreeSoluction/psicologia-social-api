import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { PsicologoController } from './psicologo/psicologo.controller';
import { PsicologoService } from './psicologo/psicologo.service';
import { PsicologoModule } from './psicologo/psicologo.module';
import { ConsultaService } from './consulta/consulta.service';
import { ConsultaController } from './consulta/consulta.controller';
import { ConsultaModule } from './consulta/consulta.module';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [PacienteModule, PsicologoModule, ConsultaModule],
  controllers: [AppController, PsicologoController, ConsultaController],
  providers: [AppService, PsicologoService, ConsultaService, PrismaClient],
})
export class AppModule {}
