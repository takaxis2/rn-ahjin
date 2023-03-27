import { PartialType } from '@nestjs/mapped-types';
import { BomDrawing } from 'src/entity/bom-drawing.entity';
import { CreateBomDto } from './create-bom.dto';

export class UpdateBomDto extends PartialType(CreateBomDto) {
    bomDrawing: BomDrawing;
}
