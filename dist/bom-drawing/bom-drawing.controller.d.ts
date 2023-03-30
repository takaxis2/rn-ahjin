/// <reference types="multer" />
import { BomDrawingService } from './bom-drawing.service';
import { CreateBomDrawingDto } from './dto/create-bom-drawing.dto';
import { UpdateBomDrawingDto } from './dto/update-bom-drawing.dto';
export declare class BomDrawingController {
    private readonly bomDrawingService;
    constructor(bomDrawingService: BomDrawingService);
    create(file: Express.Multer.File, createBomDrawingDto: CreateBomDrawingDto): Promise<import("../entity/bom-drawing.entity").BomDrawing>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBomDrawingDto: UpdateBomDrawingDto): string;
    remove(id: string): string;
}
