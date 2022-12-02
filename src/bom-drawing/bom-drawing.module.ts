import { Module } from '@nestjs/common';
import { BomDrawingService } from './bom-drawing.service';
import { BomDrawingController } from './bom-drawing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bom } from 'src/entity/bom.entity';
import { BomDrawing } from 'src/entity/bom-drawing.entity';

@Module({
  controllers: [BomDrawingController],
  providers: [BomDrawingService],
  imports:[TypeOrmModule.forFeature([Bom, BomDrawing])]
})
export class BomDrawingModule {}
