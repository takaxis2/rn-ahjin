"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileURL = exports.multerMemoryOptions = exports.multerDiskDestinationOutOptions = exports.multerDiskOptions = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const multer_1 = require("multer");
exports.multerDiskOptions = {
    fileFilter: (request, file, callback) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            callback(null, true);
        }
        else {
            callback(new common_1.HttpException({
                message: 1,
                error: '지원하지 않는 이미지 형식입니다.',
            }, common_1.HttpStatus.BAD_REQUEST), false);
        }
    },
    storage: (0, multer_1.diskStorage)({
        destination: (request, file, callback) => {
            const uploadPath = 'public';
            if (!(0, fs_1.existsSync)(uploadPath)) {
                (0, fs_1.mkdirSync)(uploadPath);
            }
            callback(null, uploadPath);
        },
        filename: (request, file, callback) => {
            callback(null, file.originalname);
        },
    }),
    limits: {
        fieldNameSize: 200,
        filedSize: 1024 * 1024,
        fields: 2,
        fileSize: 16777216,
        files: 10,
    },
};
exports.multerDiskDestinationOutOptions = {
    fileFilter: (request, file, callback) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            callback(null, true);
        }
        else {
            callback(new common_1.HttpException({
                message: 1,
                error: '지원하지 않는 이미지 형식입니다.',
            }, common_1.HttpStatus.BAD_REQUEST), false);
        }
    },
    storage: (0, multer_1.diskStorage)({
        filename: (request, file, callback) => {
            callback(null, request.body.name);
        },
    }),
    limits: {
        fieldNameSize: 200,
        filedSize: 1024 * 1024,
        fields: 2,
        fileSize: 16777216,
        files: 10,
    },
};
exports.multerMemoryOptions = {
    fileFilter: (request, file, callback) => {
        console.log('multerMemoryOptions : fileFilter');
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            callback(null, true);
        }
        else {
            callback(new common_1.HttpException({
                message: 1,
                error: '지원하지 않는 이미지 형식입니다.',
            }, common_1.HttpStatus.BAD_REQUEST), false);
        }
    },
    stroage: (0, multer_1.memoryStorage)(),
    limits: {
        fieldNameSize: 200,
        filedSize: 1024 * 1024,
        fields: 2,
        fileSize: 16777216,
        files: 10,
    },
};
const uploadFileURL = (fileName) => `http://localhost:3300/${fileName}`;
exports.uploadFileURL = uploadFileURL;
//# sourceMappingURL=multerOptions.js.map