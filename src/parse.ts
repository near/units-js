import {Gas} from './gas';
import {NEAR} from './near';
import {gasPattern, nearPattern} from './utils';

/**
 * Parse a well-formatted string into a NEAR object or a Gas object.
 *
 * @example
 * ```
 * parse('1 N') // => NEAR<'1000000000000000000000000'>
 * parse('1mN') // => NEAR<'1000000000000000000000'>
 * parse('1Tgas') // => Gas<'1000000000000'>
 * ```
 * @param x string representing a value
 *
 */
export function parse(x: string): Gas | NEAR {
  if (gasPattern.test(x)) {
    return Gas.parse(x.replace(gasPattern, ''));
  }

  if (nearPattern.test(x)) {
    return NEAR.parse(x.replace(nearPattern, ''));
  }

  throw new Error(
    `Cannot parse ${x}; expected a NEAR-like string ('1N') or a gas-like string ('1Tgas')`,
  );
}
