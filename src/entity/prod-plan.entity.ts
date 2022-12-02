import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity.entity";
import { ModelDetail } from "./modelDetail.entity";

@Entity()
export class ProdPlan extends BaseEntity{

    // @Column()
    // modelDetailId: number;
    @Column()
    EA:number;
    @Column()
    dueData: Date;  
    @Column()
    done: boolean;

    @ManyToOne(()=>ModelDetail, (modelDetail)=>modelDetail.prodPlans)
    modelDetail: ModelDetail;
}
