import { BomDrawing } from 'src/entity/bom-drawing.entity';
import { Bom } from 'src/entity/bom.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateBomDto } from './dto/create-bom.dto';
import { UpdateBomDto } from './dto/update-bom.dto';
export declare class BomService {
    private bomRepository;
    private bomDrawingRepository;
    private dataSource;
    constructor(bomRepository: Repository<Bom>, bomDrawingRepository: Repository<BomDrawing>, dataSource: DataSource);
    create(createBomDto: CreateBomDto): Promise<Bom>;
    findAll(modelId: number, type: string): Promise<Bom[]>;
    findAllG(modelId: number): Promise<Bom[]>;
    findAllL(modelId: number): Promise<Bom[]>;
    findOne(id: number): Promise<Bom>;
    update(id: number, updateBomDto: UpdateBomDto): Promise<Bom>;
    remove(id: number): Promise<string>;
}
