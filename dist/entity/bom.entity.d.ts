import { BaseEntity } from './BaseEntity.entity';
import { BomDrawing } from './bom-drawing.entity';
import { ModelDetail } from './modelDetail.entity';
import { WorkPlan } from './work-plan.entity';
export declare class Bom extends BaseEntity {
    pi: number;
    CNC: boolean;
    size: number;
    T: boolean;
    type: string;
    reduction: boolean;
    enrlgmnt: boolean;
    shorten: boolean;
    requirement: number;
    bomDrawing: BomDrawing;
    modelDetail: ModelDetail;
    workPlans: WorkPlan[];
}
