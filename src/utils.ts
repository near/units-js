import * as BN from 'bn.js';

/**
 * Removes commas, underscores, leading/trailing whitespace, and leading zeroes from the input
 * @param x A value or amount that may contain commas
 * @returns string The cleaned value
 */
export function clean(x: string): string {
  return x.trim().replace(/[,_]/g, '').replace(/^0+/, '');
}

export function toHuman(x: BN, nomination: BN, baseUnit: string): string {
  throw new Error(
    `toHuman not yet implemented; called with ${JSON.stringify({
      x,
      nomination,
      baseUnit,
    })}`,
  );
}
