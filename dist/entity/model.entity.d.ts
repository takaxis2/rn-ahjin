import { BaseEntity } from 'src/entity/BaseEntity.entity';
import { ModelDetail } from './modelDetail.entity';
export declare class Model extends BaseEntity {
    name: string;
    modelDetails: ModelDetail[];
}
