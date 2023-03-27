import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BomService } from './bom.service';
import { CreateBomDto } from './dto/create-bom.dto';
import { UpdateBomDto } from './dto/update-bom.dto';

@Controller('bom')
export class BomController {
  constructor(private readonly bomService: BomService) {}

  /* 모델 아이디를 가지는 bom생성 */
  @Post()
  async create(@Body() createBomDto: CreateBomDto) {
    return await this.bomService.create(createBomDto);
  }

  /* 모델아이디와 연계되는 bom 전부 찾아오기 */
  @Get(':id/:type')
  async findAll(@Param('id') id: string, @Param('type') type: string) {
    
    return await this.bomService.findAll(+id, type);
  }
  // @Get(':id/g')
  // async findAllG(@Param('id') id: string) {
  //   return await this.bomService.findAllG(+id);
  // }
  // @Get(':id/l')
  // async findAllL(@Param('id') id: string) {
  //   return await this.bomService.findAllL(+id);
  // }

  /* 모델 아이디와 연계되는 특정 bom 찾기  */
  @Get(':id/one')
  async findOne(@Param('id') id: string) {
    return await this.bomService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBomDto: UpdateBomDto) {
    console.log(updateBomDto, id);
    return await this.bomService.update(+id, updateBomDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.bomService.remove(+id);
  }
}
