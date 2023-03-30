"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const model_module_1 = require("./model/model.module");
const bom_module_1 = require("./bom/bom.module");
const stock_module_1 = require("./stock/stock.module");
const typeorm_1 = require("@nestjs/typeorm");
const bom_entity_1 = require("./entity/bom.entity");
const model_entity_1 = require("./entity/model.entity");
const stock_entity_1 = require("./entity/stock.entity");
const deliveredAtAndEA_entity_1 = require("./entity/deliveredAtAndEA.entity");
const model_detail_module_1 = require("./model-detail/model-detail.module");
const modelDetail_entity_1 = require("./entity/modelDetail.entity");
const prod_plan_module_1 = require("./prod-plan/prod-plan.module");
const work_plan_module_1 = require("./work-plan/work-plan.module");
const drawing_module_1 = require("./drawing/drawing.module");
const bom_drawing_module_1 = require("./bom-drawing/bom-drawing.module");
const Drawing_entity_1 = require("./entity/Drawing.entity");
const bom_drawing_entity_1 = require("./entity/bom-drawing.entity");
const work_plan_entity_1 = require("./entity/work-plan.entity");
const prod_plan_entity_1 = require("./entity/prod-plan.entity");
const notification_module_1 = require("./notification/notification.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../public'),
            }),
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: `${process.env.DB_HOST}`,
                port: parseInt(process.env.DB_PORT),
                username: `${process.env.DB_USERNAME}`,
                password: `${process.env.DB_PASSWORD}`,
                database: `${process.env.DB_DATABASE}`,
                entities: [bom_entity_1.Bom, model_entity_1.Model, stock_entity_1.Stock, deliveredAtAndEA_entity_1.DeliveredAtAndEA, modelDetail_entity_1.ModelDetail, Drawing_entity_1.Drawing, bom_drawing_entity_1.BomDrawing, work_plan_entity_1.WorkPlan, prod_plan_entity_1.ProdPlan],
                synchronize: false,
                logging: true,
            }),
            model_module_1.ModelModule,
            bom_module_1.BomModule,
            stock_module_1.StockModule,
            model_detail_module_1.ModelDetailModule,
            prod_plan_module_1.ProdPlanModule,
            work_plan_module_1.WorkPlanModule,
            drawing_module_1.DrawingModule,
            bom_drawing_module_1.BomDrawingModule,
            notification_module_1.NotificationModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map