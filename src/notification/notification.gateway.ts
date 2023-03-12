import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody,ConnectedSocket } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server } from 'socket.io';
import { Socket } from 'socket.io/dist/socket';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkPlan } from 'src/entity/work-plan.entity';
import { DataSource, Repository } from 'typeorm';
import { ProdPlan } from 'src/entity/prod-plan.entity';

@WebSocketGateway({
  namespace:'notification',
  cors:{
    origin:[]
  }
})
export class NotificationGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  
  constructor(
    @InjectRepository(WorkPlan) private workPlanRepository: Repository<WorkPlan>,
    @InjectRepository(ProdPlan) private prodPlanRepository: Repository<ProdPlan>,
    private dataSource: DataSource,
  ){};

  @WebSocketServer()
  private server: Server;
  private logger: Logger = new Logger();



  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    this.logger.log('message event emmitted');
    return 'Hello world!';
  }

  @SubscribeMessage('work-plan')
  async workPlanNotification(@MessageBody() data: any,
  @ConnectedSocket() socket){
    console.log('ws wp');
    const tasks = await this.workPlanRepository.createQueryBuilder('work-plan')
    .where('work-plan.done = :done', {done:false})
    .getCount();

    socket.emit('wpNotification', tasks);
  }

  @SubscribeMessage('prod-plan')
  async prodPlanNotification(@MessageBody() data: any,
  @ConnectedSocket() socket){
    console.log('ws wp');
    const tasks = await this.prodPlanRepository.createQueryBuilder('prod-plan')
    .where('prod-plan.done = :done', {done:false})
    .getCount();

    socket.emit('ppNotification', tasks);
  }
  
  
  afterInit(server: any) {
    this.logger.log('afterInit');
  }
  handleConnection(client: any, ...args: any[]) {
    this.logger.log('client connected');
  }
  handleDisconnect(client: any) {
    this.logger.log('client disconnected');
  }

}
