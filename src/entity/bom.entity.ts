import { BaseEntity } from './BaseEntity';
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
  // @Column()
  // dueDate: Date;
}
