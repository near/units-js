import BN from 'bn.js';
import {BNWrapper} from './bn';
import {parse, nearPattern, toHuman} from './utils';

/**
 * Exponent for calculating how many indivisible units are there in one NEAR. See {@link NEAR_NOMINATION}.
 */
export const DECIMALS = 24;

export class NEAR extends BNWrapper<NEAR> {
  /**
   * Converts a BN or number to NEAR or parses a string into NEAR.
   *
   * @example
   * ```ts
   * const nearAmt  = NEAR.from(new BN("10000000"));
   * const nearAmt2 = NEAR.from("1");
   * ```
   */
  static from(bn: BN | number | string): NEAR {
    if (typeof bn === 'string') {
      return NEAR.parse(bn);
    }

    return new NEAR(bn);
  }

  /**
   * Convert human readable NEAR amount string to a NEAR object.
   *
   * @example
   * ```ts
   * NEAR.parse('1') // => NEAR<'1000000000000000000000000'> (1e24 yoctoNEAR; 1 NEAR)
   * NEAR.parse('1,000') // => NEAR<'1000000000000000000000000000'> (1e27 yoctoNEAR; 1,000 NEAR)
   * NEAR.parse('1 mN') // => NEAR<'1000000000000000000000'> (1e21 yoctoNEAR; 0.001 NEAR)
   * NEAR.parse('1 nN') // => NEAR<'1000000000000000'> (1e15 yoctoNEAR; 0.000000001 NEAR)
   * ```
   *
   * @param x string representation of NEAR tokens amount
   * @returns new NEAR object wrapping the parsed amount
   */
  static parse(x: string): NEAR {
    x = x.replace(nearPattern, '').trim(); // Clean string for use with generic `parse`
    return new NEAR(parse(x, 24));
  }

  /**
   * Convert underlying value into yoctoNEAR-as-string representation. You
   * should not need to call this explicitly; in most places where you need to
   * pass a NEAR value to arguments you should be able to pass a NEAR object,
   * and this will be called implicitly for you.
   *
   * @returns string representing yoctoNEAR amount
   */
  toJSON(): string {
    return this.toString(10);
  }

  /**
   * Convert to string such as "1,000 N", "1 mN", or "1 nN"
   * @returns string showing NEAR amount in a human-readable way
   */
  toHuman(): string {
    return toHuman(this, 'N', DECIMALS);
  }
}
