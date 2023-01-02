import { BaseEntity } from './BaseEntity.entity';
import { Entity, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BomDrawing } from './bom-drawing.entity';
import { ModelDetail } from './modelDetail.entity';
import { WorkPlan } from './work-plan.entity';

@Entity()
export class Bom extends BaseEntity {
  // @Column()
  // modelDetailId: number;
  @Column()
  pi: number;
  @Column()
  CNC: boolean;
  @Column()
  size: number;
  @Column()
  T: boolean;
  @Column()
  type: string;
  // @Column()
  // name: string;
  @Column()
  reduction: boolean;
  @Column()
  enrlgmnt: boolean;
  @Column()
  shorten: boolean;
  @Column()
  requirement: number;

  @OneToOne(()=>BomDrawing)
  @JoinColumn()
  bomDrawing: BomDrawing;

  @ManyToOne(()=>ModelDetail, (modelDetail)=>modelDetail.boms)
  modelDetail: ModelDetail;

  @OneToMany(()=>WorkPlan, (workPlan)=>workPlan.bom)
  workPlans: WorkPlan[];
}

/**
 * 여기에 note가 있었음
 */

  