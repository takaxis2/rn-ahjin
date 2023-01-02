import { Module } from '@nestjs/common';
import { WorkPlanService } from './work-plan.service';
import { WorkPlanController } from './work-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkPlan } from 'src/entity/work-plan.entity';
import { Bom } from 'src/entity/bom.entity';

@Module({
  controllers: [WorkPlanController],
  providers: [WorkPlanService],
  imports:[
    TypeOrmModule.forFeature([WorkPlan, Bom])
  ]
})
export class WorkPlanModule {}
