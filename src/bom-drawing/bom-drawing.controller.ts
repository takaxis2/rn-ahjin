import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BomDrawingService } from './bom-drawing.service';
import { CreateBomDrawingDto } from './dto/create-bom-drawing.dto';
import { UpdateBomDrawingDto } from './dto/update-bom-drawing.dto';

@Controller('bom-drawing')
export class BomDrawingController {
  constructor(private readonly bomDrawingService: BomDrawingService) {}

  @Post()
  create(@Body() createBomDrawingDto: CreateBomDrawingDto) {
    return this.bomDrawingService.create(createBomDrawingDto);
  }

  @Get()
  findAll() {
    return this.bomDrawingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bomDrawingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBomDrawingDto: UpdateBomDrawingDto) {
    return this.bomDrawingService.update(+id, updateBomDrawingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bomDrawingService.remove(+id);
  }
}
