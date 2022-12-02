import { PartialType } from '@nestjs/mapped-types';
import { CreateBomDrawingDto } from './create-bom-drawing.dto';

export class UpdateBomDrawingDto extends PartialType(CreateBomDrawingDto) {}
