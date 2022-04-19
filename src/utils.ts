/**
 * Internal utilities.
 *
 * - not exported from index.ts
 * - do not make sense on their own, but only as internal tools to be used from NEAR or Gas classes
 */
import BN from 'bn.js';

export const gasPattern = /gas\s*$/i;
export const nearPattern = /n(ear)?\s*$/i;

const possibleMetricPrefix = /([μa-z]+)$/i;

/**
 * Internal function to be used by {@link Gas.parse} and {@link NEAR.parse}
 * after they have already stripped out 'N' or 'gas'.
 *
 * @example
 * ```
 * parse('1 m', 24) // => input passed from NEAR
 * parse('1T') // => input passed from Gas
 * ```
 *
 * @param x string with number and possibly a trailing metric prefix
 * @returns string suitable for initializing a BN
 */
export function parse(x: string, magnitude = 0): string {
  if (!x) {
    throw new TypeError(`invalid input string: '${x.toString()}'`);
  }

  let amount = x; // Mutable copy that gets updated throughout function

  const metricPrefix = possibleMetricPrefix.exec(x)?.[1];
  if (metricPrefix) {
    magnitude += getMagnitude(metricPrefix);
    amount = amount.replace(possibleMetricPrefix, '');
  }

  amount = clean(amount);

  const split = amount.split('.');

  if (magnitude === 0 && split.length > 1) {
    throw new Error(
      `Cannot parse '${amount}'; unexpected decimal point${
        metricPrefix ? ` with metric prefix ${metricPrefix}` : ''
      }`,
    );
  }

  if (split.length > 2) {
    throw new Error(
      `Cannot parse '${amount}'; too many decimal points (\`.\`)`,
    );
  }

  const wholePart = split[0];
  const fracPart = split[1] || '';

  if (fracPart.length > magnitude) {
    throw new Error(
      `Cannot parse '${x}'; fractional part contains more than ${magnitude} digits`,
    );
  }

  return `${wholePart}${fracPart.padEnd(magnitude, '0')}`;
}

/**
 * Removes commas, underscores, leading/trailing whitespace, and leading zeroes from the input
 * @param x A value or amount that may contain commas or underscores
 * @returns string The cleaned value
 */
export function clean(x: string): string {
  return x.trim().replace(/[,_]/g, '').replace(/^0+\b/, '');
}

/**
 * Get the order of magnitude of a given metric prefix. Throws an error if given string does not match a known metric prefix.
 * @param prefix string like 'c' or 'centi'
 * @returns corresponding order of magnitude (also sometimes called 'magnitude' of this metric prefix)
 */
export function getMagnitude(prefix: string): number {
  for (const [pattern, magnitude] of prefixToMagnitude.entries()) {
    if (pattern.test(prefix)) {
      return magnitude;
    }
  }

  throw new Error(`Unknown metric prefix: ${prefix}`);
}

const prefixToMagnitude = new Map([
  [/\bY\b/, 24],
  [/yotta/i, 24],
  [/\bZ\b/, 21],
  [/zetta/i, 21],
  [/\bE\b/, 18],
  [/exa/i, 18],
  [/\bP\b/, 15],
  [/peta/i, 15],
  [/\bT\b/, 12],
  [/tera/i, 12],
  [/\bG\b/, 9],
  [/giga/i, 9],
  [/\bM\b/, 6],
  [/mega/i, 6],
  [/\bk\b/, 3],
  [/kilo/i, 3],
  [/\bh\b/, 2],
  [/hecto/i, 2],
  [/\bda\b/, 1],
  [/deka/i, 1],
  [/\bd\b/, -1],
  [/deci/i, -1],
  [/\bc\b/, -2],
  [/centi/i, -2],
  [/\bm\b/, -3],
  [/milli/i, -3],
  [/μ/, -6],
  [/micro/i, -6],
  [/\bn\b/, -9],
  [/nano/i, -9],
  [/\bp\b/, -12],
  [/pico/i, -12],
  [/\bf\b/, -15],
  [/femto/i, -15],
  [/\ba\b/, -18],
  [/atto/i, -18],
  [/\bz\b/, -21],
  [/zepto/i, -21],
  [/\by\b/, -24],
  [/yocto/i, -24],
]);

const magnitudeToPrefix = new Map([
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

/**
 * Generic `toHuman` function used by both NEAR and Gas.
 *
 * @param x BN to convert to human-readable format
 * @param baseUnit String like 'N' or 'gas' that will be added to the end of the returned string
 * @param magnitude How many numbers go after the decimal point for "one" of these things (for NEAR this is 24; for gas it's 0)
 * @param adjustMagnitude DO NOT USE! Only used internally by this function when it calls itself recursively.
 * @returns human-readable representation of `x`
 */
export function toHuman(
  x: BN,
  baseUnit: string,
  magnitude: number,
  adjustMagnitude = 0
): string {
  let adjustment;
  if (x.toString().length > magnitude) {
    adjustment = 0;
  } else {
    adjustment = Math.ceil((magnitude - x.toString().length + 1) / 3) * 3;
  }

  const nomination = new BN(10).pow(new BN(magnitude - adjustment));
  const quotient = x.div(nomination);
  const remainder = x.mod(nomination);

  // Format the part before the decimal in en-US format (like "1,000");
  const integer = new Intl.NumberFormat("en-US").format(
    BigInt(quotient.toString(10))
  );

  // Leave the part after the decimal as-is (like ".00100200003")
  const fraction = remainder.eq(new BN(0))
    ? ""
    : `.${remainder
        .toString(10)
        .padStart(magnitude - adjustment, "0")
        .replace(/0+$\b/, "")}`;

  const prefix = magnitudeToPrefix.get(adjustMagnitude - adjustment)!;
  return `${integer}${fraction} ${prefix}${baseUnit}`;
}
