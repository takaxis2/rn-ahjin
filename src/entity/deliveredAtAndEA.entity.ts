import { BaseEntity } from 'src/entity/BaseEntity.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Stock } from './stock.entity';

@Entity('deliveredAtAndEA')
export class DeliveredAtAndEA extends BaseEntity {
  // @Column()
  // stockId: number;
  @Column()
  delieverdAt: Date;
  @Column()
  EA: number;

  @ManyToOne(() => Stock, (stock) => stock.deliveredAtAndEA)
  stock: Stock;
}
