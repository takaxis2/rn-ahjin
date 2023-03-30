"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProdPlanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prod_plan_dto_1 = require("./create-prod-plan.dto");
class UpdateProdPlanDto extends (0, mapped_types_1.PartialType)(create_prod_plan_dto_1.CreateProdPlanDto) {
}
exports.UpdateProdPlanDto = UpdateProdPlanDto;
//# sourceMappingURL=update-prod-plan.dto.js.map