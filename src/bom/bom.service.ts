import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BomDrawing } from 'src/entity/bom-drawing.entity';
import { Bom } from 'src/entity/bom.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateBomDto } from './dto/create-bom.dto';
import { UpdateBomDto } from './dto/update-bom.dto';

@Injectable()
export class BomService {
  constructor(
    @InjectRepository(Bom) private bomRepository: Repository<Bom>,
    @InjectRepository(BomDrawing) private bomDrawingRepository: Repository<BomDrawing>,
    private dataSource: DataSource,
  ) {}

  async create(createBomDto: CreateBomDto) {
    const bom: Bom = new Bom();
    //bom과 modelDetail을 연결 시켜야함
    bom.CNC = createBomDto.CNC;
    bom.T = createBomDto.T;
    bom.pi = createBomDto.pi;
    // bom.size = createBomDto.size;

    return await this.bomRepository.save(bom);
  }

  async findAll(modelId: number, type: string) {
    // const boms = await this.bomRepository.find({ where: { modelDetailId: modelId } });
    const boms = await this.dataSource.getRepository(Bom)
    .createQueryBuilder('bom')
    .leftJoin('bom.modelDetail','modelDetail')
    .addSelect('modelDetail.id')
    .addSelect('modelDetail.name')
    .leftJoin('bom.bomDrawing','bomDrawing')
    .addSelect('bomDrawing.fileName')
    .where('modelDetail.id = :id',{id:modelId})
    .andWhere('bom.type =:type',{type: type})
    .getMany();

    return boms;
  }
  async findAllG(modelId: number) {
    // const boms = await this.bomRepository.find({ where: { modelDetailId: modelId } });
    const boms = await this.dataSource.getRepository(Bom)
    .createQueryBuilder('bom')
    .leftJoin('bom.modelDetail','modelDetail')
    .leftJoin('bom.bomDrawing','bomDrawing')
    .addSelect('bomDrawing.fileName')
    .where('modelDetail.id = :id',{id:modelId})
    .andWhere('bom.type =:type',{type:'g'})
    .getMany();

    return boms;
  }
  async findAllL(modelId: number) {
    // const boms = await this.bomRepository.find({ where: { modelDetailId: modelId } });
    const boms = await this.dataSource.getRepository(Bom)
    .createQueryBuilder('bom')
    .leftJoin('bom.modelDetail','modelDetail')
    .leftJoin('bom.bomDrawing','bomDrawing')
    .addSelect('bomDrawing.fileName')
    .where('modelDetail.id = :id',{id:modelId})
    .andWhere('bom.type =:type',{type:'l'})
    .getMany();
    return boms;
  }

  async findOne(id: number) {
    const bom = await this.bomRepository.findOne({ where: { id: id } });
    return bom;
  }

  async update(id: number, updateBomDto: UpdateBomDto) {
    const bom = await this.bomRepository.findOne({ where: { id: id } });
    bom.CNC = updateBomDto.CNC;
    bom.T = updateBomDto.T;
    bom.enrlgmnt = updateBomDto.enrlgmnt;
    bom.pi = updateBomDto.pi;
    bom.reduction = updateBomDto.reduction;
    bom.requirement = updateBomDto.requirement;
    bom.shorten = updateBomDto.shorten;
    bom.size = updateBomDto.size;
    //얘도 따로 처리해야함
    const bomDrawing = await this.bomDrawingRepository.findOne({where:{id:updateBomDto.bomDrawing.id}})
     bom.bomDrawing = bomDrawing;

    await this.bomRepository.save(bom);
    
    return bom;
  }

  async remove(id: number) {
    return `This action removes a #${id} bom`;
  }
}
