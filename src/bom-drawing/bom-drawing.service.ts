import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BomDrawing } from 'src/entity/bom-drawing.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateBomDrawingDto } from './dto/create-bom-drawing.dto';
import { UpdateBomDrawingDto } from './dto/update-bom-drawing.dto';

@Injectable()
export class BomDrawingService {
  constructor(
    @InjectRepository(BomDrawing) private bomDrawingRepository : Repository<BomDrawing>,
    private dateSource: DataSource
  ){}

  async create(file:Express.Multer.File, createBomDrawingDto: CreateBomDrawingDto) {
    const bomDrawing = new BomDrawing();
    if(file !== undefined)
    {
      bomDrawing.fileName = file.filename;

        bomDrawing.bomId = createBomDrawingDto.bomId;
        
        const result = await this.bomDrawingRepository.save(bomDrawing);
        
        return result;
      }
      return bomDrawing;
  }

  findAll() {
    return `This action returns all bomDrawing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bomDrawing`;
  }

  update(id: number, updateBomDrawingDto: UpdateBomDrawingDto) {
    return `This action updates a #${id} bomDrawing`;
  }

  remove(id: number) {
    return `This action removes a #${id} bomDrawing`;
  }
}
