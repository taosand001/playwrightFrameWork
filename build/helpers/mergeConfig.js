"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeConfig = void 0;
const mergeConfig = (userConfig, defaultConfig) => {
    return Object.assign(Object.assign({}, defaultConfig), userConfig);
};
exports.mergeConfig = mergeConfig;
