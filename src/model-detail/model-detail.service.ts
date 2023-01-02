import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'src/entity/model.entity';
import { ModelDetail } from 'src/entity/modelDetail.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateModelDetailDto } from './dto/create-model-detail.dto';
import { UpdateModelDetailDto } from './dto/update-model-detail.dto';

@Injectable()
export class ModelDetailService {
  constructor(
    @InjectRepository(ModelDetail)
    private modelDetailRepository: Repository<ModelDetail>,
    @InjectRepository(Model)
    private modelRepository: Repository<Model>,
    private dataSource: DataSource,
  ) {}

  async create(createModelDetailDto: CreateModelDetailDto) {
    const modelDetail: ModelDetail = new ModelDetail();

    // modelDetail.bomId = createModelDetailDto.bomId;
    modelDetail.name = createModelDetailDto.name;

    //modelDetail과 model 연결 시켜야함, 수정에서 

    const result = await this.modelDetailRepository.save(modelDetail);

    return result;
  }

  async findAll(modelId: number) {
    const modelDetails = await this.dataSource
    .getRepository(ModelDetail)
    .createQueryBuilder('model-detail')
    .select('model-detail.id')
    .addSelect('model-detail.name')
    .leftJoin('model-detail.model', 'model')
    .addSelect('model.id')
    .leftJoinAndSelect('model-detail.drawing', 'drawing')
    // .addSelect('drawing.id')
    .where('model.id = :id',{id:modelId})
    .getMany();

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
    
    modelDetail.name = updateModelDetailDto.name;
    
    //이거 두개는 전달받은 아이디값으로 여기서 다시 찾아서 연결시킨다
    modelDetail.drawing;
    

    return await this.modelDetailRepository.save(modelDetail);
  }

  async remove(id: number) {
    return `This action removes a #${id} modelDetail`;
  }
}
