import { BomService } from './bom.service';
import { CreateBomDto } from './dto/create-bom.dto';
import { UpdateBomDto } from './dto/update-bom.dto';
export declare class BomController {
    private readonly bomService;
    constructor(bomService: BomService);
    create(createBomDto: CreateBomDto): Promise<import("../entity/bom.entity").Bom>;
    findAll(id: string, type: string): Promise<import("../entity/bom.entity").Bom[]>;
    findOne(id: string): Promise<import("../entity/bom.entity").Bom>;
    update(id: string, updateBomDto: UpdateBomDto): Promise<import("../entity/bom.entity").Bom>;
    remove(id: string): Promise<string>;
}
