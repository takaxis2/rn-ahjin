import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdPlanService } from './prod-plan.service';
import { CreateProdPlanDto } from './dto/create-prod-plan.dto';
import { UpdateProdPlanDto } from './dto/update-prod-plan.dto';

@Controller('prod-plan')
export class ProdPlanController {
  constructor(private readonly prodPlanService: ProdPlanService) {}

  @Post()
  async create(@Body() createProdPlanDto: CreateProdPlanDto) {
    console.log(createProdPlanDto);
    return await this.prodPlanService.create(createProdPlanDto);
  }

  @Get()
  async findAll() {
    return await this.prodPlanService.findAll();
  }

  /**
   * 완료된 항목 찾기
   * 페이지 처리해야함
   * 한번에 10개씩?
   * 파라미터 받을것
   */
  @Get(':num/done')
  async findAllDone(@Param('num') page: string){
    return await this.prodPlanService.findAllDone(+page);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await  this.prodPlanService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProdPlanDto: UpdateProdPlanDto) {
    return await this.prodPlanService.update(+id, updateProdPlanDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.prodPlanService.remove(+id);
  }
}
