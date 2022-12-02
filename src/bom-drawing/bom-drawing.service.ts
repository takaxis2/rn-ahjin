import { Injectable } from '@nestjs/common';
import { CreateBomDrawingDto } from './dto/create-bom-drawing.dto';
import { UpdateBomDrawingDto } from './dto/update-bom-drawing.dto';

@Injectable()
export class BomDrawingService {
  create(createBomDrawingDto: CreateBomDrawingDto) {
    return 'This action adds a new bomDrawing';
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
