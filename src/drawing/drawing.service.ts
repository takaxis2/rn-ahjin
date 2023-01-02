import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drawing } from 'src/entity/Drawing.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateDrawingDto } from './dto/create-drawing.dto';
import { UpdateDrawingDto } from './dto/update-drawing.dto';

@Injectable()
export class DrawingService {

  constructor(
    @InjectRepository(Drawing) private drawingRepository : Repository<Drawing>,
    private dataSource: DataSource
    ){}

  async create(file: Express.Multer.File, createDrawingDto: CreateDrawingDto) {
    //여기서 파일이 이미 존재하는지 확인하고 생성?
    const drawing = new Drawing();
    drawing.fileName = file.filename;
    drawing.modelDetailId = createDrawingDto.modelDetailId;

    const result = await this.drawingRepository.save(drawing);

    return result;
  }

  findAll() {
    return `This action returns all drawing`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} drawing`;
  }

  update(id: number, updateDrawingDto: UpdateDrawingDto) {
    return `This action updates a #${id} drawing`;
  }

  remove(id: number) {
    return `This action removes a #${id} drawing`;
  }
}
