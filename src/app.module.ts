import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ModelModule } from './model/model.module';
import { BomModule } from './bom/bom.module';
import { StockModule } from './stock/stock.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bom } from './entity/bom.entity';
import { Model } from './entity/model.entity';
import { Stock } from './entity/stock.entity';
import { DeliveredAtAndEA } from './entity/deliveredAtAndEA.entity';
import { ModelDetailModule } from './model-detail/model-detail.module';
import { ModelDetail } from './entity/modelDetail.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `${process.env.DB_HOST}`,
      port: parseInt(process.env.DB_PORT),
      username: `${process.env.DB_USERNAME}`,
      password: `${process.env.DB_PASSWORD}`,
      database: `${process.env.DB_DATABASE}`,
      entities: [Bom, Model, Stock, DeliveredAtAndEA, ModelDetail], 
      synchronize: false,
      // migrationsRun: true,
      logging: true,
    }),
    ModelModule,
    BomModule,
    StockModule,
    ModelDetailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
