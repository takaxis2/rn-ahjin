import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ModelDetailService } from './model-detail.service';
import { CreateModelDetailDto } from './dto/create-model-detail.dto';
import { UpdateModelDetailDto } from './dto/update-model-detail.dto';

@Controller('model-detail')
export class ModelDetailController {
  constructor(private readonly modelDetailService: ModelDetailService) {}

  @Post()
  async create(@Body() createModelDetailDto: CreateModelDetailDto) {
    console.log('model-detail create');
    return await this.modelDetailService.create(createModelDetailDto);
  }

  @Get(':id/all')
  async findAll(@Param('id') id: string) {
    return await this.modelDetailService.findAll(+id);
  }

  @Get(':id/one')
  async findOne(@Param('id') id: string) {
    return await this.modelDetailService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateModelDetailDto: UpdateModelDetailDto,
  ) {
    return await this.modelDetailService.update(+id, updateModelDetailDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.modelDetailService.remove(+id);
  }
}
