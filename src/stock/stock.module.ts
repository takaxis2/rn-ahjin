import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stock } from 'src/entity/stock.entity';
import { DeliveredAtAndEA } from 'src/entity/deliveredAtAndEA.entity';

@Module({
  controllers: [StockController],
  providers: [StockService],
  imports: [TypeOrmModule.forFeature([Stock, DeliveredAtAndEA])],
})
export class StockModule {}
