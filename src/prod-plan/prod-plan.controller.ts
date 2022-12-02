import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdPlanService } from './prod-plan.service';
import { CreateProdPlanDto } from './dto/create-prod-plan.dto';
import { UpdateProdPlanDto } from './dto/update-prod-plan.dto';

@Controller('prod-plan')
export class ProdPlanController {
  constructor(private readonly prodPlanService: ProdPlanService) {}

  @Post()
  create(@Body() createProdPlanDto: CreateProdPlanDto) {
    return this.prodPlanService.create(createProdPlanDto);
  }

  @Get()
  findAll() {
    return this.prodPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodPlanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdPlanDto: UpdateProdPlanDto) {
    return this.prodPlanService.update(+id, updateProdPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodPlanService.remove(+id);
  }
}
