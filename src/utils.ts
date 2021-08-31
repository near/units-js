import BN from 'bn.js';

/**
 * Removes commas, underscores, leading/trailing whitespace, and leading zeroes from the input
 * @param x A value or amount that may contain commas
 * @returns string The cleaned value
 */
export function clean(x: string): string {
  return x.trim().replace(/[,_]/g, '').replace(/^0+/, '');
}

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

export function toHuman(
  x: BN,
  baseUnit: string,
  decimals: number,
  factor = 0,
): string {
  const nomination = new BN(10).pow(new BN(decimals));
  const quotient = x.div(nomination);
  const remainder = x.mod(nomination);

  if (quotient.gt(new BN(0))) {
    // Format the part before the decimal in en-US format (like "1,000");
    const integer = new Intl.NumberFormat('en-US').format(
      BigInt(quotient.toString(10)),
    );

    // Leave the part after the decimal as-is (like ".00100200003")
    const fraction = remainder.eq(new BN(0))
      ? ''
      : `.${remainder.toString(10).padStart(decimals, '0').replace(/0+$/, '')}`;

    return `${integer}${fraction} ${prefixes.get(factor)!}${baseUnit}`;
  }

  return toHuman(x, baseUnit, decimals - 3, factor - 3);
}
