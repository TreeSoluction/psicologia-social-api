import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get()
  @HttpCode(200)
  async getAll() {
    const result = await this.service.getAll();
    return result;
  }

  @Get('random')
  @HttpCode(200)
  async getRandom() {
    const result = await this.service.getRandomPsicologo();
    return result;
  }

  @Get(':id')
  @HttpCode(200)
  async getById(@Param('id') id: string) {
    const result = await this.service.getById(parseInt(id));
    return result;
  }

  @Get()
  @HttpCode(200)
  async getRandomActive() {
    const result = await this.service.getAll();
    return result;
  }

  @Put(':email/deactive')
  @HttpCode(200)
  async deactive(@Param('email') email: string) {
    const result = await this.service.deactive(email);
    return result;
  }

  @Put(':email/active')
  @HttpCode(200)
  async activate(@Param('email') email: string) {
    const result = await this.service.active(email);
    return result;
  }
}
