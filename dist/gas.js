"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gas = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const utils_1 = require("./utils");
class Gas extends bn_js_1.default {
    /**
     * Convert human readable gas amount to internal indivisible units.
     *
     * @param amt decimal string denominated in gas, Tgas, Ggas, etc.
     * @returns new NEAR object wrapping the parsed amount
     */
    static parse(amt) {
        if (!amt) {
            throw new TypeError(`Gas.parse expects a string, got '${amt.toString()}'`);
        }
        const amount = (0, utils_1.clean)(amt);
        return new Gas(amount);
    }
    toJSON() {
        return this.toString(10);
    }
    /**
     * Convert to string such as "53 Tgas", "900 Ggas"
     * @returns string showing gas amount in a human-readable way
     */
    toHuman() {
        return (0, utils_1.toHuman)(this, 'gas', 12, 12);
    }
}
exports.Gas = Gas;
//# sourceMappingURL=gas.js.map