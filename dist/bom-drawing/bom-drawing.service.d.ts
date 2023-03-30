/// <reference types="multer" />
import { BomDrawing } from 'src/entity/bom-drawing.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateBomDrawingDto } from './dto/create-bom-drawing.dto';
import { UpdateBomDrawingDto } from './dto/update-bom-drawing.dto';
export declare class BomDrawingService {
    private bomDrawingRepository;
    private dateSource;
    constructor(bomDrawingRepository: Repository<BomDrawing>, dateSource: DataSource);
    create(file: Express.Multer.File, createBomDrawingDto: CreateBomDrawingDto): Promise<BomDrawing>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBomDrawingDto: UpdateBomDrawingDto): string;
    remove(id: number): string;
}
