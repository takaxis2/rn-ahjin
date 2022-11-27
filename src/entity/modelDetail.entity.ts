import { BaseEntity } from 'src/entity/BaseEntity';
import { Column, Entity } from 'typeorm';

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
}
