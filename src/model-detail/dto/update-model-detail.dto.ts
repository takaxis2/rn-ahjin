import { PartialType } from '@nestjs/mapped-types';
import { CreateModelDetailDto } from './create-model-detail.dto';

export class UpdateModelDetailDto extends PartialType(CreateModelDetailDto) {}
