import { BaseEntity } from './BaseEntity';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';
import { DeliveredAtAndEA } from './deliveredAtAndEA.entity';

@Entity()
export class Stock extends BaseEntity {
  @Column()
  name: string;
  // @Column()
  // total: number;
  @OneToMany(
    () => DeliveredAtAndEA,
    (deliveredAtAndEA) => deliveredAtAndEA.stock,
  )
  @JoinColumn()
  deliveredAtAndEA: DeliveredAtAndEA[];

  add(deliveredAtAndEA: DeliveredAtAndEA) {
    this.deliveredAtAndEA.push(deliveredAtAndEA);
  }
}
