import { DeliveredAtAndEA } from 'src/entity/deliveredAtAndEA.entity';
import { Stock } from 'src/entity/stock.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockService {
    private stockRepository;
    private deliveredAtAndEARepository;
    private dataSource;
    constructor(stockRepository: Repository<Stock>, deliveredAtAndEARepository: Repository<DeliveredAtAndEA>, dataSource: DataSource);
    create(createStockDto: CreateStockDto): Promise<Stock>;
    createDetail(id: number, createStockDto: CreateStockDto): Promise<Stock>;
    findAll(): Promise<string>;
    findOne(id: number): Promise<Stock>;
    update(id: number, updateStockDto: UpdateStockDto): Promise<string>;
    remove(id: number): Promise<string>;
}
