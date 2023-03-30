import { BaseEntity } from "./BaseEntity.entity";
import { ModelDetail } from "./modelDetail.entity";
export declare class ProdPlan extends BaseEntity {
    EA: number;
    dueDate: Date;
    done: boolean;
    modelDetail: ModelDetail;
}
