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

  @Get(':id/one') //얘는 필요가 없어
  async findOne(@Param('id') id: string) {
    return await this.modelDetailService.findOne(+id);
  }

  //완료
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateModelDetailDto: UpdateModelDetailDto,
  ) {
    console.log(id, updateModelDetailDto);
    return await this.modelDetailService.update(+id, updateModelDetailDto);
  }

  @Delete(':id') //애도 안쓸거야
  async remove(@Param('id') id: string) {
    return await this.modelDetailService.remove(+id);
  }
}
