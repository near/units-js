"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHuman = exports.clean = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
/**
 * Removes commas, underscores, leading/trailing whitespace, and leading zeroes from the input
 * @param x A value or amount that may contain commas
 * @returns string The cleaned value
 */
function clean(x) {
    return x.trim().replace(/[,_]/g, '').replace(/^0+/, '');
}
exports.clean = clean;
const prefixes = new Map([
    [24, 'Y'],
    [21, 'Z'],
    [18, 'E'],
    [15, 'P'],
    [12, 'T'],
    [9, 'G'],
    [6, 'M'],
    [3, 'k'],
    [0, ''],
    [-3, 'm'],
    [-6, 'μ'],
    [-9, 'n'],
    [-12, 'p'],
    [-15, 'f'],
    [-18, 'a'],
    [-21, 'z'],
    [-24, 'y'],
]);
function toHuman(x, baseUnit, decimals, factor = 0) {
    const nomination = new bn_js_1.default(10).pow(new bn_js_1.default(decimals));
    const quotient = x.div(nomination);
    const remainder = x.mod(nomination);
    if (quotient.gt(new bn_js_1.default(0))) {
        // Format the part before the decimal in en-US format (like "1,000");
        const integer = new Intl.NumberFormat('en-US').format(BigInt(quotient.toString(10)));
        // Leave the part after the decimal as-is (like ".00100200003")
        const fraction = remainder.eq(new bn_js_1.default(0))
            ? ''
            : `.${remainder.toString(10).padStart(decimals, '0').replace(/0+$/, '')}`;
        return `${integer}${fraction} ${prefixes.get(factor)}${baseUnit}`;
    }
    return toHuman(x, baseUnit, decimals - 3, factor - 3);
}
exports.toHuman = toHuman;
//# sourceMappingURL=utils.js.map