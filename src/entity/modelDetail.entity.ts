import { BaseEntity } from 'src/entity/BaseEntity.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Bom } from './bom.entity';
import { Drawing } from './Drawing.entity';
import { Model } from './model.entity';
import { ProdPlan } from './prod-plan.entity';

@Entity('modelDetail') // 이거 이름 product로 바꿀 수도
export class ModelDetail extends BaseEntity {
  // @Column()
  // modelId: number;
  @Column()
  name: string;
  // @Column()
  // bomId: number;


  @ManyToOne(()=>Model, (model)=>model.modelDetails)
  model:Model;  

  @OneToMany(()=>ProdPlan, (prodPlan)=>prodPlan.modelDetail)
  prodPlans: ProdPlan[];

  @OneToMany(()=>Bom, (bom)=>bom.modelDetail)
  boms: Bom[];

  @OneToOne(()=>Drawing)
  @JoinColumn()
  drawing: Drawing;

}
