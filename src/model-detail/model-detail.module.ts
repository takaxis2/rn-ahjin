import { Module } from '@nestjs/common';
import { ModelDetailService } from './model-detail.service';
import { ModelDetailController } from './model-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelDetail } from 'src/entity/modelDetail.entity';
import { Drawing } from 'src/entity/Drawing.entity';

@Module({
  controllers: [ModelDetailController],
  providers: [ModelDetailService],
  imports: [TypeOrmModule.forFeature([ModelDetail, Drawing])],
})
export class ModelDetailModule {}
