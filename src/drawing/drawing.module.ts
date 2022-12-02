import { Module } from '@nestjs/common';
import { DrawingService } from './drawing.service';
import { DrawingController } from './drawing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelDetail } from 'src/entity/modelDetail.entity';
import { Drawing } from 'src/entity/Drawing.entity';

@Module({
  controllers: [DrawingController],
  providers: [DrawingService],
  imports:[TypeOrmModule.forFeature([ModelDetail, Drawing])]
})
export class DrawingModule {}
