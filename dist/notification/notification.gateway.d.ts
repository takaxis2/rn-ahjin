import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { WorkPlan } from 'src/entity/work-plan.entity';
import { DataSource, Repository } from 'typeorm';
import { ProdPlan } from 'src/entity/prod-plan.entity';
export declare class NotificationGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private workPlanRepository;
    private prodPlanRepository;
    private dataSource;
    constructor(workPlanRepository: Repository<WorkPlan>, prodPlanRepository: Repository<ProdPlan>, dataSource: DataSource);
    private server;
    private logger;
    handleMessage(client: any, payload: any): string;
    workPlanNotification(data: any, socket: any): Promise<void>;
    prodPlanNotification(data: any, socket: any): Promise<void>;
    afterInit(server: any): void;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
}
