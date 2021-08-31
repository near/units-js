import BN from 'bn.js';
export declare class Gas extends BN {
    /**
     * Convert human readable gas amount to internal indivisible units.
     *
     * @param amt decimal string denominated in gas, Tgas, Ggas, etc.
     * @returns new NEAR object wrapping the parsed amount
     */
    static parse(amt: string): Gas;
    toJSON(): string;
    /**
     * Convert to string such as "53 Tgas", "900 Ggas"
     * @returns string showing gas amount in a human-readable way
     */
    toHuman(): string;
}
