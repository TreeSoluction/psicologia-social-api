import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PsicologoService } from './psicologo.service';
import { createPsicologoDto } from './dto/createPsicologoDto';

@Controller('psicologo')
export class PsicologoController {
  constructor(private readonly service: PsicologoService) {}

  @Post()
  @HttpCode(201)
  async register(@Body() dto: createPsicologoDto) {
    const result = await this.service.create(dto);
    return result;
  }
}
