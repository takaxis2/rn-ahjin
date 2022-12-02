import { PartialType } from '@nestjs/mapped-types';
import { CreateProdPlanDto } from './create-prod-plan.dto';

export class UpdateProdPlanDto extends PartialType(CreateProdPlanDto) {}
