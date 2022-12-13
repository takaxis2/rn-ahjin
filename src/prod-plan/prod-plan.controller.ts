import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdPlanService } from './prod-plan.service';
import { CreateProdPlanDto } from './dto/create-prod-plan.dto';
import { UpdateProdPlanDto } from './dto/update-prod-plan.dto';

@Controller('prod-plan')
export class ProdPlanController {
  constructor(private readonly prodPlanService: ProdPlanService) {}

  @Post()
  async create(@Body() createProdPlanDto: CreateProdPlanDto) {
    return await this.prodPlanService.create(createProdPlanDto);
  }

  @Get()
  async findAll() {
    return await this.prodPlanService.findAll();
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
