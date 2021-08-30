"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEAR = exports.NEAR_NOMINATION = exports.NEAR_NOMINATION_EXP = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const utils_1 = require("./utils");
/**
 * Exponent for calculating how many indivisible units are there in one NEAR. See {@link NEAR_NOMINATION}.
 */
exports.NEAR_NOMINATION_EXP = 24;
/**
 * Number of indivisible units in one NEAR. Derived from {@link NEAR_NOMINATION_EXP}.
 */
exports.NEAR_NOMINATION = new bn_js_1.default('10', 10).pow(new bn_js_1.default(exports.NEAR_NOMINATION_EXP, 10));
class NEAR extends bn_js_1.default {
    /**
     * Convert human readable NEAR amount to internal indivisible units.
     * Effectively this multiplies given amount by {@link NEAR_NOMINATION}.
     *
     * @param amt decimal string (potentially fractional) denominated in NEAR.
     * @returns new NEAR object wrapping the parsed amount
     */
    static parse(amt) {
        if (!amt) {
            throw new TypeError(`NEAR.parse expects a string, got '${amt.toString()}'`);
        }
        const amount = (0, utils_1.clean)(amt);
        const split = amount.split('.');
        if (split.length > 2) {
            throw new Error(`Cannot parse '${amt}' as NEAR amount`);
        }
        const wholePart = split[0];
        const fracPart = split[1] || '';
        if (fracPart.length > exports.NEAR_NOMINATION_EXP) {
            throw new Error(`Cannot parse '${amt}' as NEAR amount; fractional part contains more than ${exports.NEAR_NOMINATION_EXP} digits`);
        }
        return new NEAR(wholePart + fracPart.padEnd(exports.NEAR_NOMINATION_EXP, '0'));
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
        return (0, utils_1.toHuman)(this, exports.NEAR_NOMINATION, 'N');
    }
}
exports.NEAR = NEAR;
//# sourceMappingURL=near.js.map