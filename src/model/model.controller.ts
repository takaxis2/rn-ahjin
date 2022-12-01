  import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ModelService } from './model.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Post()
  async create(@Body() createModelDto: CreateModelDto) {
    return await this.modelService.create(createModelDto);
  }

  @Get()
  async findAll() {
    const result =await this.modelService.findAll();
    console.log(result);
    return result;
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.modelService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateModelDto: UpdateModelDto,
  ) {
    return await this.modelService.update(+id, updateModelDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.modelService.remove(+id);
  // }
}
