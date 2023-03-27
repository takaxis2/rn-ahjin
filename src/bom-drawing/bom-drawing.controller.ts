import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UploadedFile } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerDiskOptions } from 'src/drawing/multerOptions';
import { BomDrawingService } from './bom-drawing.service';
import { CreateBomDrawingDto } from './dto/create-bom-drawing.dto';
import { UpdateBomDrawingDto } from './dto/update-bom-drawing.dto';

@Controller('bom-drawing')
export class BomDrawingController {
  constructor(private readonly bomDrawingService: BomDrawingService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', multerDiskOptions))
  async create(@UploadedFile() file: Express.Multer.File, @Body() createBomDrawingDto: CreateBomDrawingDto) {
    console.log('bom drawing');
    return await this.bomDrawingService.create(file,createBomDrawingDto);
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
