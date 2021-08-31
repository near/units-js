import BN from 'bn.js';
import {clean, toHuman} from './utils';

export class Gas extends BN {
  /**
   * Convert human readable gas amount to internal indivisible units.
   *
   * @param amt decimal string denominated in gas, Tgas, Ggas, etc.
   * @returns new NEAR object wrapping the parsed amount
   */
  static parse(amt: string): Gas {
    if (!amt) {
      throw new TypeError(`invalid input string: '${amt.toString()}'`);
    }

    const amount = clean(amt);

    return new Gas(amount);
  }

  toJSON(): string {
    return this.toString(10);
  }

  /**
   * Convert to string such as "53 Tgas", "900 Ggas"
   * @returns string showing gas amount in a human-readable way
   */
  toHuman(): string {
    return toHuman(this, 'gas', 12, 12);
  }
}
