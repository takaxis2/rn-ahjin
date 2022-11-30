import { BaseEntity } from 'src/entity/BaseEntity.entity';
import { Column, Entity } from 'typeorm';

@Entity('model')
export class Model extends BaseEntity {
  @Column()
  name: string;
}
