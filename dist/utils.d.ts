import * as BN from 'bn.js';
/**
 * Removes commas, underscores, leading/trailing whitespace, and leading zeroes from the input
 * @param x A value or amount that may contain commas
 * @returns string The cleaned value
 */
export declare function clean(x: string): string;
export declare function toHuman(x: BN, nomination: BN, baseUnit: string): string;
