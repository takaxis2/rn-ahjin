import { Drawing } from 'src/entity/Drawing.entity';
import { CreateModelDetailDto } from './create-model-detail.dto';
declare const UpdateModelDetailDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateModelDetailDto>>;
export declare class UpdateModelDetailDto extends UpdateModelDetailDto_base {
    drawing: Drawing;
}
export {};
