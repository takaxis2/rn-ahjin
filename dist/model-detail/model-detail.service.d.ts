import { Drawing } from 'src/entity/Drawing.entity';
import { ModelDetail } from 'src/entity/modelDetail.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateModelDetailDto } from './dto/create-model-detail.dto';
import { UpdateModelDetailDto } from './dto/update-model-detail.dto';
export declare class ModelDetailService {
    private modelDetailRepository;
    private drawingRepository;
    private dataSource;
    constructor(modelDetailRepository: Repository<ModelDetail>, drawingRepository: Repository<Drawing>, dataSource: DataSource);
    create(createModelDetailDto: CreateModelDetailDto): Promise<ModelDetail>;
    findAll(modelId: number): Promise<ModelDetail[]>;
    findOne(id: number): Promise<ModelDetail>;
    update(id: number, updateModelDetailDto: UpdateModelDetailDto): Promise<ModelDetail>;
    remove(id: number): Promise<string>;
}
