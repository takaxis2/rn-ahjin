import { BaseEntity } from './BaseEntity.entity';
import { DeliveredAtAndEA } from './deliveredAtAndEA.entity';
export declare class Stock extends BaseEntity {
    name: string;
    deliveredAtAndEA: DeliveredAtAndEA[];
    add(deliveredAtAndEA: DeliveredAtAndEA): void;
}
