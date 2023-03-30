/// <reference types="multer" />
import { Drawing } from 'src/entity/Drawing.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateDrawingDto } from './dto/create-drawing.dto';
import { UpdateDrawingDto } from './dto/update-drawing.dto';
export declare class DrawingService {
    private drawingRepository;
    private dataSource;
    constructor(drawingRepository: Repository<Drawing>, dataSource: DataSource);
    create(file: Express.Multer.File, createDrawingDto: CreateDrawingDto): Promise<Drawing>;
    findAll(): string;
    findOne(id: number): Promise<string>;
    update(id: number, updateDrawingDto: UpdateDrawingDto): string;
    remove(id: number): string;
}
