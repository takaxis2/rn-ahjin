import { BaseEntity } from './BaseEntity.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Bom extends BaseEntity {
  @Column()
  modelId: number;
  // @Column()
  // name: string;
  @Column()
  pi: number;
  @Column()
  size: number;
  @Column()
  weight: number;
  @Column()
  T: boolean;
  @Column()
  CNC: boolean;
  @Column()
  note: string;
  @Column()
  EA: number;

  @Column()
  active: boolean;
  // @Column()
  // dueDate: Date;
}

/**
 * 축 : boolean, 축소
 * 확 : boolean, 확대
 * 단 : boolean, 짧을단
 */