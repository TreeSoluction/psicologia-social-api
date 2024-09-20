import { Controller, Get, HttpCode } from '@nestjs/common';
import { ConsultaService } from './consulta.service';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly service: ConsultaService) {}

  @Get()
  @HttpCode(200)
  async getConsulta() {
    const result = await this.service.requestMeeting();
    return result;
  }
}
