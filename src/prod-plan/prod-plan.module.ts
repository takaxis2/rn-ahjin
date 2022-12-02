import { Module } from '@nestjs/common';
import { ProdPlanService } from './prod-plan.service';
import { ProdPlanController } from './prod-plan.controller';

@Module({
  controllers: [ProdPlanController],
  providers: [ProdPlanService]
})
export class ProdPlanModule {}
