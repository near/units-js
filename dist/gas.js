"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gas = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
class Gas extends bn_js_1.default {
    toJSON() {
        return this.toString(10);
    }
}
exports.Gas = Gas;
//# sourceMappingURL=gas.js.map