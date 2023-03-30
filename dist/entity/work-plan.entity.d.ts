import { BaseEntity } from "./BaseEntity.entity";
import { Bom } from "./bom.entity";
export declare class WorkPlan extends BaseEntity {
    done: boolean;
    EA: number;
    bom: Bom;
}
