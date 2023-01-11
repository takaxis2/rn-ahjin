import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DrawingService } from './drawing.service';
import { CreateDrawingDto } from './dto/create-drawing.dto';
import { UpdateDrawingDto } from './dto/update-drawing.dto';
import { multerDiskOptions } from './multerOptions';

@Controller('drawing')
export class DrawingController {
  constructor(private readonly drawingService: DrawingService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', multerDiskOptions))
  async create(@UploadedFile() file :Express.Multer.File, @Body() createDrawingDto: CreateDrawingDto) {
    console.log(createDrawingDto);
    // return await this.drawingService.create(file, createDrawingDto);
  }

  @Get()
  findAll() {
    return this.drawingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.drawingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrawingDto: UpdateDrawingDto) {
    return this.drawingService.update(+id, updateDrawingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drawingService.remove(+id);
  }
}
