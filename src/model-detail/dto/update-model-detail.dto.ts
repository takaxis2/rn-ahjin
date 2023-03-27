import { PartialType } from '@nestjs/mapped-types';
import { Drawing } from 'src/entity/Drawing.entity';
import { CreateModelDetailDto } from './create-model-detail.dto';

export class UpdateModelDetailDto extends PartialType(CreateModelDetailDto) {
  drawing: Drawing;
}
