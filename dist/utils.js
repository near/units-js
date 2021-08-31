"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHuman = exports.clean = void 0;
/**
 * Removes commas, underscores, leading/trailing whitespace, and leading zeroes from the input
 * @param x A value or amount that may contain commas
 * @returns string The cleaned value
 */
function clean(x) {
    return x.trim().replace(/[,_]/g, '').replace(/^0+/, '');
}
exports.clean = clean;
function toHuman(x, nomination, baseUnit) {
    throw new Error(`toHuman not yet implemented; called with ${JSON.stringify({
        x,
        nomination,
        baseUnit,
    })}`);
}
exports.toHuman = toHuman;
//# sourceMappingURL=utils.js.map