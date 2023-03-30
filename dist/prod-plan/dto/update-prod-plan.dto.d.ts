import { CreateProdPlanDto } from './create-prod-plan.dto';
declare const UpdateProdPlanDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProdPlanDto>>;
export declare class UpdateProdPlanDto extends UpdateProdPlanDto_base {
    done: boolean;
}
export {};
