/// <reference types="multer" />
export declare const multerDiskOptions: {
    fileFilter: (request: any, file: any, callback: any) => void;
    storage: import("multer").StorageEngine;
    limits: {
        fieldNameSize: number;
        filedSize: number;
        fields: number;
        fileSize: number;
        files: number;
    };
};
export declare const multerDiskDestinationOutOptions: {
    fileFilter: (request: any, file: any, callback: any) => void;
    storage: import("multer").StorageEngine;
    limits: {
        fieldNameSize: number;
        filedSize: number;
        fields: number;
        fileSize: number;
        files: number;
    };
};
export declare const multerMemoryOptions: {
    fileFilter: (request: any, file: any, callback: any) => void;
    stroage: import("multer").StorageEngine;
    limits: {
        fieldNameSize: number;
        filedSize: number;
        fields: number;
        fileSize: number;
        files: number;
    };
};
export declare const uploadFileURL: (fileName: any) => string;
