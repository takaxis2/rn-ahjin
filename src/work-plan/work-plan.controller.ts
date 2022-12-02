import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkPlanService } from './work-plan.service';
import { CreateWorkPlanDto } from './dto/create-work-plan.dto';
import { UpdateWorkPlanDto } from './dto/update-work-plan.dto';

@Controller('work-plan')
export class WorkPlanController {
  constructor(private readonly workPlanService: WorkPlanService) {}

  @Post()
  async create(@Body() createWorkPlanDto: CreateWorkPlanDto) {
    return this.workPlanService.create(createWorkPlanDto);
  }

  @Get()
  async findAll() {
    return this.workPlanService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.workPlanService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateWorkPlanDto: UpdateWorkPlanDto) {
    return this.workPlanService.update(+id, updateWorkPlanDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.workPlanService.remove(+id);
  }
}
