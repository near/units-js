import BN from 'bn.js';
import {parse, gasPattern, toHuman} from './utils';

export class Gas extends BN {
  /**
   * Convert human readable gas amount to internal indivisible units.
   *
   * @example
   * ```ts
   * Gas.parse('1') // => Gas<'1'> (1 gas)
   * Gas.parse('1 Tgas') // => Gas<'1000000000000'> (1e12 gas)
   * Gas.parse('1 Ggas') // => Gas<'1000000000'> (1e9 gas)
   * ```
   *
   * @param x decimal string denominated in gas, Tgas, Ggas, etc.
   * @returns new Gas object wrapping the parsed amount
   */
  static parse(x: string): Gas {
    x = x.replace(gasPattern, '').trim(); // Clean string for use with generic `parse`
    return new Gas(parse(x));
  }

  toJSON(): string {
    return this.toString(10);
  }

  /**
   * Convert to string such as "53 Tgas" or "900 Ggas"
   * @returns string showing gas amount in a human-readable way
   */
  toHuman(): string {
    return toHuman(this, 'gas', 12, 12);
  }
}
