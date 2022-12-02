import { BaseEntity } from 'src/entity/BaseEntity.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ModelDetail } from './modelDetail.entity';

@Entity('model')
export class Model extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(()=>ModelDetail, (modelDetail)=>modelDetail.model)
  modelDetails: ModelDetail[];

}
