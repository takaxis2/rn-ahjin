import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bom } from 'src/entity/bom.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateBomDto } from './dto/create-bom.dto';
import { UpdateBomDto } from './dto/update-bom.dto';

@Injectable()
export class BomService {
  constructor(
    @InjectRepository(Bom) private bomRepository: Repository<Bom>,
    private dataSource: DataSource,
  ) {}

  async create(createBomDto: CreateBomDto) {
    const bom: Bom = new Bom();
    //bom과 modelDetail을 연결 시켜야함
    bom.CNC = createBomDto.CNC;
    bom.T = createBomDto.T;
    bom.pi = createBomDto.pi;
    bom.size = createBomDto.size;

    return await this.bomRepository.save(bom);
  }

  async findAll(modelId: number) {
    // const boms = await this.bomRepository.find({ where: { modelDetailId: modelId } });
    const boms = await this.bomRepository.find();

    return boms;
  }

  async findOne(id: number) {
    const bom = await this.bomRepository.findOne({ where: { id: id } });
    return bom;
  }

  async update(id: number, updateBomDto: UpdateBomDto) {
    const bom = await this.bomRepository.findOne({ where: { id: id } });


    return await this.bomRepository.save(bom);
  }

  async remove(id: number) {
    return `This action removes a #${id} bom`;
  }
}
