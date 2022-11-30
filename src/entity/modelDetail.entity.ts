import { BaseEntity } from 'src/entity/BaseEntity.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { Drawing } from './Drawing.entity';

@Entity('modelDetail') // 이거 이름 product로 바꿀 수도
export class ModelDetail extends BaseEntity {
  @Column()
  modelId: number;
  @Column()
  name: string;
  @Column()
  bomId: number;
  @Column()
  dueDate: Date;
  @Column()
  EA: number;
  @Column()
  drawingId:number;
}
