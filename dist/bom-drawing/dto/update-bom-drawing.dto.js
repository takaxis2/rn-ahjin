"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBomDrawingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bom_drawing_dto_1 = require("./create-bom-drawing.dto");
class UpdateBomDrawingDto extends (0, mapped_types_1.PartialType)(create_bom_drawing_dto_1.CreateBomDrawingDto) {
}
exports.UpdateBomDrawingDto = UpdateBomDrawingDto;
//# sourceMappingURL=update-bom-drawing.dto.js.map