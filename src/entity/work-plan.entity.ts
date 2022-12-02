import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity.entity";
import { Bom } from "./bom.entity";

@Entity()
export class WorkPlan extends BaseEntity {
  
  // @Column()
  // bomId: number;
  @Column()
  done:boolean
  @Column()
  EA:number;

  @ManyToOne(()=>Bom, (bom)=>bom.workPlans)
  bom: Bom;
  
}
