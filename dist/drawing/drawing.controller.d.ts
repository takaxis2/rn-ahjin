/// <reference types="multer" />
import { DrawingService } from './drawing.service';
import { CreateDrawingDto } from './dto/create-drawing.dto';
import { UpdateDrawingDto } from './dto/update-drawing.dto';
export declare class DrawingController {
    private readonly drawingService;
    constructor(drawingService: DrawingService);
    create(file: Express.Multer.File, createDrawingDto: CreateDrawingDto): Promise<import("../entity/Drawing.entity").Drawing>;
    findAll(): string;
    findOne(id: string): Promise<string>;
    update(id: string, updateDrawingDto: UpdateDrawingDto): string;
    remove(id: string): string;
}
