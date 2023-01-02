import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdPlan } from 'src/entity/prod-plan.entity';
import { WorkPlan } from 'src/entity/work-plan.entity';
import { NotificationGateway } from './notification.gateway';

@Module({
  providers: [NotificationGateway],
  imports:[TypeOrmModule.forFeature([WorkPlan, ProdPlan])],
})
export class NotificationModule {}
