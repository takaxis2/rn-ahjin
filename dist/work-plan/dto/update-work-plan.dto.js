"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkPlanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_work_plan_dto_1 = require("./create-work-plan.dto");
class UpdateWorkPlanDto extends (0, mapped_types_1.PartialType)(create_work_plan_dto_1.CreateWorkPlanDto) {
}
exports.UpdateWorkPlanDto = UpdateWorkPlanDto;
//# sourceMappingURL=update-work-plan.dto.js.map