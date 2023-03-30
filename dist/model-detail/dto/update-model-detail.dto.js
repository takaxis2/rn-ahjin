"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateModelDetailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_model_detail_dto_1 = require("./create-model-detail.dto");
class UpdateModelDetailDto extends (0, mapped_types_1.PartialType)(create_model_detail_dto_1.CreateModelDetailDto) {
}
exports.UpdateModelDetailDto = UpdateModelDetailDto;
//# sourceMappingURL=update-model-detail.dto.js.map