import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'src/entity/model.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model) private modelRepository: Repository<Model>,
    private dataSource: DataSource,
  ) {}

  async   create(createModelDto: CreateModelDto) {
    const model: Model = new Model();
    model.name = createModelDto.modelName;

    const result = await this.modelRepository.save(model);

    return result;
  }

  async findAll() {
    const models = await this.modelRepository.find();
    return models;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} model`;
  // }

  async update(id: number, updateModelDto: UpdateModelDto) {
    return `This action updates a #${id} model`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} model`;
  // }
}
