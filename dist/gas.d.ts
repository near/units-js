import BN from 'bn.js';
export declare class Gas extends BN {
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
    static parse(x: string): Gas;
    toJSON(): string;
    /**
     * Convert to string such as "53 Tgas" or "900 Ggas"
     * @returns string showing gas amount in a human-readable way
     */
    toHuman(): string;
}
