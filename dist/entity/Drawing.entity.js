"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawing = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_entity_1 = require("./BaseEntity.entity");
let Drawing = class Drawing extends BaseEntity_entity_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.fileName = '';
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Drawing.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Drawing.prototype, "modelDetailId", void 0);
Drawing = __decorate([
    (0, typeorm_1.Entity)()
], Drawing);
exports.Drawing = Drawing;
//# sourceMappingURL=Drawing.entity.js.map