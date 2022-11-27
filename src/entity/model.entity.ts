import { BaseEntity } from 'src/entity/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity('model')
export class Model extends BaseEntity {
  @Column()
  name: string;
}
/**
 * oneToMany로 모델 detail, bom 땡겨오기
 */
