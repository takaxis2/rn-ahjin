import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity.entity";

@Entity()
export class Drawing extends BaseEntity{
    @Column()
    fileName : string ='';

    @Column()
    modelDetailId: number;

    
}