import { BaseEntity } from 'src/entity/BaseEntity.entity';
import { Stock } from './stock.entity';
export declare class DeliveredAtAndEA extends BaseEntity {
    delieverdAt: Date;
    EA: number;
    stock: Stock;
}
