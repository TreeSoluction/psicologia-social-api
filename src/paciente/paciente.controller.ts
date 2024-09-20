import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { createPacienteDto } from './dto/createPacienteDto';
import { fastRegisterPacienteDto } from './dto/fastRegisterPacienteDto';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly service: PacienteService) {}

  @Post('/fast')
  @HttpCode(201)
  async fastRegister(@Body() dto: fastRegisterPacienteDto) {
    const result = await this.service.fastCreate(dto);

    if (result.messages) {
      throw new BadRequestException(result.messages);
    }

    return result;
  }

  @Post()
  @HttpCode(201)
  async register(@Body() dto: createPacienteDto) {
    const result = await this.service.create(dto);

    if (result.messages) {
      throw new BadRequestException(result.messages);
    }

    return result;
  }

  @Put(':id')
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() dto: createPacienteDto) {
    const result = await this.service.update(id, dto);
    return result;
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
    return;
  }

  @Get()
  @HttpCode(200)
  async get() {
    const result = await this.service.get();
    return result;
  }
}
