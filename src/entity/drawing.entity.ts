import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity.entity";

@Entity()
export class Drawing extends BaseEntity{
    @Column()
    file : string;

    
}