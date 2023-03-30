import { ModelService } from './model.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
export declare class ModelController {
    private readonly modelService;
    constructor(modelService: ModelService);
    create(createModelDto: CreateModelDto): Promise<import("../entity/model.entity").Model>;
    findAll(): Promise<import("../entity/model.entity").Model[]>;
    update(id: string, updateModelDto: UpdateModelDto): Promise<string>;
}
