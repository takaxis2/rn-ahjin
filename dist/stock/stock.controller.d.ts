import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(createStockDto: CreateStockDto): Promise<import("../entity/stock.entity").Stock>;
    createDetail(id: string, createStockDto: CreateStockDto): Promise<import("../entity/stock.entity").Stock>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<import("../entity/stock.entity").Stock>;
    update(id: string, updateStockDto: UpdateStockDto): Promise<string>;
    remove(id: string): Promise<string>;
}
