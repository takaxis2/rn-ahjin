import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModelDetail } from 'src/entity/modelDetail.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateModelDetailDto } from './dto/create-model-detail.dto';
import { UpdateModelDetailDto } from './dto/update-model-detail.dto';

@Injectable()
export class ModelDetailService {
  constructor(
    @InjectRepository(ModelDetail)
    private modelDetailRepository: Repository<ModelDetail>,
    private dataSource: DataSource,
  ) {}

  async create(createModelDetailDto: CreateModelDetailDto) {
    const modelDetail: ModelDetail = new ModelDetail();

    modelDetail.EA = createModelDetailDto.EA;
    modelDetail.bomId = createModelDetailDto.bomId;
    modelDetail.dueDate = createModelDetailDto.dueDate;
    modelDetail.name = createModelDetailDto.name;
    modelDetail.modelId = createModelDetailDto.modelId;

    console.log('ok');

    const result = await this.modelDetailRepository.save(modelDetail);

    return result;
  }

  async findAll(modelId: number) {
    const modelDetails = await this.modelDetailRepository.find({
      where: { modelId: modelId },
    });

    return modelDetails;
  }

  async findOne(id: number) {
    const bom = await this.modelDetailRepository.findOne({ where: { id: id } });

    return bom;
  }

  async update(id: number, updateModelDetailDto: UpdateModelDetailDto) {
    const modelDetail = await this.modelDetailRepository.findOne({
      where: { id: id },
    });

    modelDetail.dueDate = updateModelDetailDto.dueDate;
    modelDetail.EA = updateModelDetailDto.EA;

    return await this.modelDetailRepository.save(modelDetail);
  }

  async remove(id: number) {
    return `This action removes a #${id} modelDetail`;
  }
}
