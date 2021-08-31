import BN from 'bn.js';
import {clean, toHuman} from './utils';

/**
 * Exponent for calculating how many indivisible units are there in one NEAR. See {@link NEAR_NOMINATION}.
 */
export const NEAR_NOMINATION_EXP = 24;

/**
 * Number of indivisible units in one NEAR. Derived from {@link NEAR_NOMINATION_EXP}.
 */
export const NEAR_NOMINATION = new BN('10', 10).pow(
  new BN(NEAR_NOMINATION_EXP, 10),
);

export class NEAR extends BN {
  /**
   * Convert human readable NEAR amount to internal indivisible units.
   * Effectively this multiplies given amount by {@link NEAR_NOMINATION}.
   *
   * @param amt decimal string (potentially fractional) denominated in NEAR.
   * @returns new NEAR object wrapping the parsed amount
   */
  static parse(amt: string): NEAR {
    if (!amt) {
      throw new TypeError(
        `NEAR.parse expects a string, got '${amt.toString()}'`,
      );
    }

    const amount = clean(amt);
    const split = amount.split('.');
    if (split.length > 2) {
      throw new Error(`Cannot parse '${amt}' as NEAR amount`);
    }

    const wholePart = split[0];
    const fracPart = split[1] || '';
    if (fracPart.length > NEAR_NOMINATION_EXP) {
      throw new Error(
        `Cannot parse '${amt}' as NEAR amount; fractional part contains more than ${NEAR_NOMINATION_EXP} digits`,
      );
    }

    return new NEAR(wholePart + fracPart.padEnd(NEAR_NOMINATION_EXP, '0'));
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
    return toHuman(this, NEAR_NOMINATION, 'N');
  }
}
