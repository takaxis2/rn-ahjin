import { BaseEntity } from 'src/entity/BaseEntity.entity';
import { Bom } from './bom.entity';
import { Drawing } from './Drawing.entity';
import { Model } from './model.entity';
import { ProdPlan } from './prod-plan.entity';
export declare class ModelDetail extends BaseEntity {
    name: string;
    model: Model;
    prodPlans: ProdPlan[];
    boms: Bom[];
    drawing: Drawing;
}
