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
import { ProdPlanModule } from './prod-plan/prod-plan.module';
import { WorkPlanModule } from './work-plan/work-plan.module';
import { DrawingModule } from './drawing/drawing.module';
import { BomDrawingModule } from './bom-drawing/bom-drawing.module';
import { Drawing } from './entity/Drawing.entity';
import { BomDrawing } from './entity/bom-drawing.entity';
import { WorkPlan } from './entity/work-plan.entity';
import { ProdPlan } from './entity/prod-plan.entity';
import { NotificationModule } from './notification/notification.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '../public'),
  }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `${process.env.DB_HOST}`,
      port: parseInt(process.env.DB_PORT),
      username: `${process.env.DB_USERNAME}`,
      password: `${process.env.DB_PASSWORD}`,
      database: `${process.env.DB_DATABASE}`,
      entities: [Bom, Model, Stock, DeliveredAtAndEA, ModelDetail, Drawing, BomDrawing, WorkPlan, ProdPlan], 
      synchronize: false,
      // migrationsRun: true,
      logging: true,
    }),
    ModelModule,
    BomModule,
    StockModule,
    ModelDetailModule,
    ProdPlanModule,
    WorkPlanModule,
    DrawingModule,
    BomDrawingModule,
    NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
