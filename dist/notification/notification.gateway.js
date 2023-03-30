"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const typeorm_1 = require("@nestjs/typeorm");
const work_plan_entity_1 = require("../entity/work-plan.entity");
const typeorm_2 = require("typeorm");
const prod_plan_entity_1 = require("../entity/prod-plan.entity");
let NotificationGateway = class NotificationGateway {
    constructor(workPlanRepository, prodPlanRepository, dataSource) {
        this.workPlanRepository = workPlanRepository;
        this.prodPlanRepository = prodPlanRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger();
    }
    ;
    handleMessage(client, payload) {
        this.logger.log('message event emmitted');
        return 'Hello world!';
    }
    async workPlanNotification(data, socket) {
        console.log('ws wp');
        const tasks = await this.workPlanRepository.createQueryBuilder('work-plan')
            .where('work-plan.done = :done', { done: false })
            .getCount();
        socket.emit('wpNotification', tasks);
    }
    async prodPlanNotification(data, socket) {
        console.log('ws wp');
        const tasks = await this.prodPlanRepository.createQueryBuilder('prod-plan')
            .where('prod-plan.done = :done', { done: false })
            .getCount();
        socket.emit('ppNotification', tasks);
    }
    afterInit(server) {
        this.logger.log('afterInit');
    }
    handleConnection(client, ...args) {
        this.logger.log('client connected');
    }
    handleDisconnect(client) {
        this.logger.log('client disconnected');
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], NotificationGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], NotificationGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('work-plan'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NotificationGateway.prototype, "workPlanNotification", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('prod-plan'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NotificationGateway.prototype, "prodPlanNotification", null);
NotificationGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: 'notification',
        cors: {
            origin: []
        }
    }),
    __param(0, (0, typeorm_1.InjectRepository)(work_plan_entity_1.WorkPlan)),
    __param(1, (0, typeorm_1.InjectRepository)(prod_plan_entity_1.ProdPlan)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], NotificationGateway);
exports.NotificationGateway = NotificationGateway;
//# sourceMappingURL=notification.gateway.js.map