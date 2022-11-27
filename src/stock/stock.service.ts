import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveredAtAndEA } from 'src/entity/deliveredAtAndEA.entity';
import { Stock } from 'src/entity/stock.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock) private stockRepository: Repository<Stock>,
    @InjectRepository(DeliveredAtAndEA)
    private deliveredAtAndEARepository: Repository<DeliveredAtAndEA>,
    private dataSource: DataSource,
  ) {}

  async create(createStockDto: CreateStockDto) {
    const stock = new Stock();
    stock.name = createStockDto.name;
    // stock.total = createStockDto.total;

    const deliveredAtAndEA = new DeliveredAtAndEA();
    deliveredAtAndEA.EA = createStockDto.EA;
    deliveredAtAndEA.delieverdAt = createStockDto.deliveredAt;

    stock.deliveredAtAndEA = [deliveredAtAndEA];
    const stockResult = await this.stockRepository.save(stock);
    // deliveredAtAndEA.stock = stock;
    // deliveredAtAndEA.stockId = stockResult.id;
    await this.deliveredAtAndEARepository.save(deliveredAtAndEA);

    return stockResult;
    //여기 transaction으로 걸기
  }

  async createDetail(id: number, createStockDto: CreateStockDto) {
    const stock = await this.stockRepository.findOne({ where: { id: id } });

    const deliveredAtAndEA = new DeliveredAtAndEA();
    deliveredAtAndEA.EA = createStockDto.EA;
    deliveredAtAndEA.delieverdAt = createStockDto.deliveredAt;
    deliveredAtAndEA.stock = stock;

    await this.deliveredAtAndEARepository.save(deliveredAtAndEA);

    return await this.stockRepository.save(stock);
  }

  async findAll() {
    return `This action returns all stock`;
  }

  async findOne(id: number) {
    const stock = await this.dataSource
      .getRepository(Stock)
      .createQueryBuilder('stock')
      // .select('stock.id')
      // .addSelect('stock.name')
      .innerJoinAndSelect('stock.deliveredAtAndEA', 'deliveredatandea')
      .where('stock.id = :id', { id: id })
      .getOne();
    return stock;
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  async remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
