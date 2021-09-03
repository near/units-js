import BN from 'bn.js';
import {BNWrapper} from './bn';
import {parse, gasPattern, toHuman} from './utils';

export class Gas extends BNWrapper<Gas> {
  /**
   * Converts a BN, number, or string in gas units to Gas.
   *
   * @example
   * ```ts
   * const gas  = Gas.from(new BN("10000000"))
   * const gas2 = Gas.from('1 TGas')
   * ```
   */
  static from(bn: BN | number | string): Gas {
    if (bn instanceof BN) {
      const gas = new Gas(0);
      // @ts-expect-error internal method
      bn.copy(gas); // eslint-disable-line @typescript-eslint/no-unsafe-call
      return gas;
    }

    return new Gas(bn);
  }

  from(bn: BN | number | string): Gas {
    return Gas.from(bn);
  }

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

  /**
   * Convert to string such as "53 Tgas" or "900 Ggas"
   * @returns string showing gas amount in a human-readable way
   */
  toHuman(): string {
    return toHuman(this, 'gas', 12, 12);
  }
}
