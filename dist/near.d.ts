import BN from 'bn.js';
/**
 * Exponent for calculating how many indivisible units are there in one NEAR. See {@link NEAR_NOMINATION}.
 */
export declare const DECIMALS = 24;
export declare class NEAR extends BN {
    /**
     * Convert human readable NEAR amount to internal indivisible units.
     *
     * @param amt decimal string (potentially fractional) denominated in NEAR.
     * @returns new NEAR object wrapping the parsed amount
     */
    static parse(amt: string): NEAR;
    /**
     * Convert underlying value into yoctoNEAR-as-string representation. You
     * should not need to call this explicitly; in most places where you need to
     * pass a NEAR value to arguments you should be able to pass a NEAR object,
     * and this will be called implicitly for you.
     *
     * @returns string representing yoctoNEAR amount
     */
    toJSON(): string;
    /**
     * Convert to string such as "1,000 N", "1 mN", or "1 nN"
     * @returns string showing NEAR amount in a human-readable way
     */
    toHuman(): string;
}
