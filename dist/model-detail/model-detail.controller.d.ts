import { ModelDetailService } from './model-detail.service';
import { CreateModelDetailDto } from './dto/create-model-detail.dto';
import { UpdateModelDetailDto } from './dto/update-model-detail.dto';
export declare class ModelDetailController {
    private readonly modelDetailService;
    constructor(modelDetailService: ModelDetailService);
    create(createModelDetailDto: CreateModelDetailDto): Promise<import("../entity/modelDetail.entity").ModelDetail>;
    findAll(id: string): Promise<import("../entity/modelDetail.entity").ModelDetail[]>;
    findOne(id: string): Promise<import("../entity/modelDetail.entity").ModelDetail>;
    update(id: string, updateModelDetailDto: UpdateModelDetailDto): Promise<import("../entity/modelDetail.entity").ModelDetail>;
    remove(id: string): Promise<string>;
}
