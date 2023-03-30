import { BomDrawing } from 'src/entity/bom-drawing.entity';
import { CreateBomDto } from './create-bom.dto';
declare const UpdateBomDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBomDto>>;
export declare class UpdateBomDto extends UpdateBomDto_base {
    bomDrawing: BomDrawing;
}
export {};
