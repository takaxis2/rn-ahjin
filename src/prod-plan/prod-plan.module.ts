import { Module } from '@nestjs/common';
import { ProdPlanService } from './prod-plan.service';
import { ProdPlanController } from './prod-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdPlan } from 'src/entity/prod-plan.entity';
import { ModelDetail } from 'src/entity/modelDetail.entity';

@Module({
  controllers: [ProdPlanController],
  providers: [ProdPlanService],
  imports:[TypeOrmModule.forFeature([ProdPlan, ModelDetail])]
})
export class ProdPlanModule {}
