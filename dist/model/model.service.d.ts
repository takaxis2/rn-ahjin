import { Model } from 'src/entity/model.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
export declare class ModelService {
    private modelRepository;
    private dataSource;
    constructor(modelRepository: Repository<Model>, dataSource: DataSource);
    create(createModelDto: CreateModelDto): Promise<Model>;
    findAll(): Promise<Model[]>;
    update(id: number, updateModelDto: UpdateModelDto): Promise<string>;
}
