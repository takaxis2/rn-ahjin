import { Module } from '@nestjs/common';
import { BomService } from './bom.service';
import { BomController } from './bom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bom } from 'src/entity/bom.entity';

@Module({
  controllers: [BomController],
  providers: [BomService],
  imports: [TypeOrmModule.forFeature([Bom])],
})
export class BomModule {}
