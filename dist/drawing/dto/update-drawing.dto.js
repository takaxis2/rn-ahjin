"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDrawingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_drawing_dto_1 = require("./create-drawing.dto");
class UpdateDrawingDto extends (0, mapped_types_1.PartialType)(create_drawing_dto_1.CreateDrawingDto) {
}
exports.UpdateDrawingDto = UpdateDrawingDto;
//# sourceMappingURL=update-drawing.dto.js.map