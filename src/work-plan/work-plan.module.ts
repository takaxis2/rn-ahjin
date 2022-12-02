import { Module } from '@nestjs/common';
import { WorkPlanService } from './work-plan.service';
import { WorkPlanController } from './work-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkPlan } from 'src/entity/work-plan.entity';

@Module({
  controllers: [WorkPlanController],
  providers: [WorkPlanService],
  imports:[
    TypeOrmModule.forFeature([WorkPlan])
  ]
})
export class WorkPlanModule {}
