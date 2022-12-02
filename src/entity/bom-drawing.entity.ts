import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity.entity";

@Entity()
export class BomDrawing extends BaseEntity {
    @Column()
    fileName: string;

    @Column()
    bomId:number;
}
