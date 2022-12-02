import { Module } from '@nestjs/common';
import { BomService } from './bom.service';
import { BomController } from './bom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bom } from 'src/entity/bom.entity';
import { BomDrawing } from 'src/entity/bom-drawing.entity';
import { WorkPlan } from 'src/entity/work-plan.entity';

@Module({
  controllers: [BomController],
  providers: [BomService],
  imports: [TypeOrmModule.forFeature([Bom, BomDrawing, WorkPlan])],
})
export class BomModule {}
