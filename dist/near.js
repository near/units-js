"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEAR = exports.DECIMALS = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const utils_1 = require("./utils");
/**
 * Exponent for calculating how many indivisible units are there in one NEAR. See {@link NEAR_NOMINATION}.
 */
exports.DECIMALS = 24;
class NEAR extends bn_js_1.default {
    /**
     * Convert human readable NEAR amount to internal indivisible units.
     *
     * @param amt decimal string (potentially fractional) denominated in NEAR.
     * @returns new NEAR object wrapping the parsed amount
     */
    static parse(amt) {
        if (!amt) {
            throw new TypeError(`invalid input string: '${amt.toString()}'`);
        }
        const amount = (0, utils_1.clean)(amt);
        const split = amount.split('.');
        if (split.length > 2) {
            throw new Error(`Cannot parse '${amt}' as NEAR amount`);
        }
        const wholePart = split[0];
        const fracPart = split[1] || '';
        if (fracPart.length > exports.DECIMALS) {
            throw new Error(`Cannot parse '${amt}' as NEAR amount; fractional part contains more than ${exports.DECIMALS} digits`);
        }
        return new NEAR(wholePart + fracPart.padEnd(exports.DECIMALS, '0'));
    }
    /**
     * Convert underlying value into yoctoNEAR-as-string representation. You
     * should not need to call this explicitly; in most places where you need to
     * pass a NEAR value to arguments you should be able to pass a NEAR object,
     * and this will be called implicitly for you.
     *
     * @returns string representing yoctoNEAR amount
     */
    toJSON() {
        return this.toString(10);
    }
    /**
     * Convert to string such as "1,000 N", "1 mN", or "1 nN"
     * @returns string showing NEAR amount in a human-readable way
     */
    toHuman() {
        return (0, utils_1.toHuman)(this, 'N', exports.DECIMALS);
    }
}
exports.NEAR = NEAR;
//# sourceMappingURL=near.js.map