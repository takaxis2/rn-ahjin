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
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const deliveredAtAndEA_entity_1 = require("../entity/deliveredAtAndEA.entity");
const stock_entity_1 = require("../entity/stock.entity");
const typeorm_2 = require("typeorm");
let StockService = class StockService {
    constructor(stockRepository, deliveredAtAndEARepository, dataSource) {
        this.stockRepository = stockRepository;
        this.deliveredAtAndEARepository = deliveredAtAndEARepository;
        this.dataSource = dataSource;
    }
    async create(createStockDto) {
        const stock = new stock_entity_1.Stock();
        stock.name = createStockDto.name;
        const deliveredAtAndEA = new deliveredAtAndEA_entity_1.DeliveredAtAndEA();
        deliveredAtAndEA.EA = createStockDto.EA;
        deliveredAtAndEA.delieverdAt = createStockDto.deliveredAt;
        stock.deliveredAtAndEA = [deliveredAtAndEA];
        const stockResult = await this.stockRepository.save(stock);
        await this.deliveredAtAndEARepository.save(deliveredAtAndEA);
        return stockResult;
    }
    async createDetail(id, createStockDto) {
        const stock = await this.stockRepository.findOne({ where: { id: id } });
        const deliveredAtAndEA = new deliveredAtAndEA_entity_1.DeliveredAtAndEA();
        deliveredAtAndEA.EA = createStockDto.EA;
        deliveredAtAndEA.delieverdAt = createStockDto.deliveredAt;
        deliveredAtAndEA.stock = stock;
        await this.deliveredAtAndEARepository.save(deliveredAtAndEA);
        return await this.stockRepository.save(stock);
    }
    async findAll() {
        return `This action returns all stock`;
    }
    async findOne(id) {
        const stock = await this.dataSource
            .getRepository(stock_entity_1.Stock)
            .createQueryBuilder('stock')
            .innerJoinAndSelect('stock.deliveredAtAndEA', 'deliveredatandea')
            .where('stock.id = :id', { id: id })
            .getOne();
        return stock;
    }
    async update(id, updateStockDto) {
        return `This action updates a #${id} stock`;
    }
    async remove(id) {
        return `This action removes a #${id} stock`;
    }
};
StockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(stock_entity_1.Stock)),
    __param(1, (0, typeorm_1.InjectRepository)(deliveredAtAndEA_entity_1.DeliveredAtAndEA)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], StockService);
exports.StockService = StockService;
//# sourceMappingURL=stock.service.js.map