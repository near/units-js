import BN from 'bn.js';

export abstract class BNWrapper<T extends BN> extends BN {
  /**
   * @description returns the maximum of 2 BN instances.
   */
  max(other: BN): T {
    return this.from(BN.max(this, other));
  }

  /**
   * @description returns the minimum of 2 BN instances.
   */
  min(other: BN): T {
    return this.from(BN.min(this, other));
  }

  /**
   * @description  clone number
   */
  clone(): T {
    return this.from(super.clone());
  }

  /**
   * @description convert to two's complement representation, where width is bit width
   */
  toTwos(width: number): T {
    return this.from(super.toTwos(width));
  }

  /**
   * @description  convert from two's complement representation, where width is the bit width
   */
  fromTwos(width: number): T {
    return this.from(super.fromTwos(width));
  }

  /**
   * @description negate sign
   */
  neg(): T {
    return this.from(super.neg());
  }

  /**
   * @description negate sign
   */
  ineg(): T {
    return this.from(super.ineg());
  }

  /**
   * @description absolute value
   */
  abs(): T {
    return this.from(super.abs());
  }

  /**
   * @description absolute value
   */
  iabs(): T {
    return this.from(super.iabs());
  }

  /**
   * @description addition
   */
  add(b: BN): T {
    return this.from(super.add(b));
  }

  /**
   * @description  addition
   */
  iadd(b: BN): T {
    return this.from(super.iadd(b));
  }

  /**
   * @description addition
   */
  addn(b: number): T {
    return this.from(super.addn(b));
  }

  /**
   * @description addition
   */
  iaddn(b: number): T {
    return this.from(super.iaddn(b));
  }

  /**
   * @description subtraction
   */
  sub(b: BN): T {
    return this.from(super.sub(b));
  }

  /**
   * @description subtraction
   */
  isub(b: BN): T {
    return this.from(super.isub(b));
  }

  /**
   * @description subtraction
   */
  subn(b: number): T {
    return this.from(super.subn(b));
  }

  /**
   * @description subtraction
   */
  isubn(b: number): T {
    return this.from(super.isubn(b));
  }

  /**
   * @description multiply
   */
  mul(b: BN): T {
    return this.from(super.mul(b));
  }

  /**
   * @description multiply
   */
  imul(b: BN): T {
    return this.from(super.imul(b));
  }

  /**
   * @description multiply
   */
  muln(b: number): T {
    return this.from(super.muln(b));
  }

  /**
   * @description multiply
   */
  imuln(b: number): T {
    return this.from(super.imuln(b));
  }

  /**
   * @description square
   */
  sqr(): T {
    return this.from(super.sqr());
  }

  /**
   * @description square
   */
  isqr(): T {
    return this.from(super.isqr());
  }

  /**
   * @description raise `a` to the power of `b`
   */
  pow(b: BN): T {
    return this.from(super.pow(b));
  }

  /**
   * @description divide
   */
  div(b: BN): T {
    return this.from(super.div(b));
  }

  /**
   * @description divide
   */
  divn(b: number): T {
    return this.from(super.divn(b));
  }

  /**
   * @description divide
   */
  idivn(b: number): T {
    return this.from(super.idivn(b));
  }

  /**
   * @description reduct
   */
  mod(b: BN): T {
    return this.from(super.mod(b));
  }

  /**
   * @description reduct
   */
  umod(b: BN): T {
    return this.from(super.umod(b));
  }

  /**
   * @description  rounded division
   */
  divRound(b: BN): T {
    return this.from(super.divRound(b));
  }

  /**
   * @description or
   */
  or(b: BN): T {
    return this.from(super.or(b));
  }

  /**
   * @description or
   */
  ior(b: BN): T {
    return this.from(super.ior(b));
  }

  /**
   * @description or
   */
  uor(b: BN): T {
    return this.from(super.uor(b));
  }

  /**
   * @description or
   */
  iuor(b: BN): T {
    return this.from(super.iuor(b));
  }

  /**
   * @description and
   */
  and(b: BN): T {
    return this.from(super.and(b));
  }

  /**
   * @description and
   */
  iand(b: BN): T {
    return this.from(super.iand(b));
  }

  /**
   * @description and
   */
  uand(b: BN): T {
    return this.from(super.uand(b));
  }

  /**
   * @description and
   */
  iuand(b: BN): T {
    return this.from(super.iuand(b));
  }

  /**
   * @description and (NOTE: `andln` is going to be replaced with `andn` in future)
   */
  andln(b: number): T {
    return this.from(super.andln(b));
  }

  /**
   * @description xor
   */
  xor(b: BN): T {
    return this.from(super.xor(b));
  }

  /**
   * @description xor
   */
  ixor(b: BN): T {
    return this.from(super.ixor(b));
  }

  /**
   * @description xor
   */
  uxor(b: BN): T {
    return this.from(super.uxor(b));
  }

  /**
   * @description xor
   */
  iuxor(b: BN): T {
    return this.from(super.iuxor(b));
  }

  /**
   * @description set specified bit to 1
   */
  setn(b: number): T {
    return this.from(super.setn(b));
  }

  /**
   * @description shift left
   */
  shln(b: number): T {
    return this.from(super.shln(b));
  }

  /**
   * @description shift left
   */
  ishln(b: number): T {
    return this.from(super.ishln(b));
  }

  /**
   * @description shift left
   */
  ushln(b: number): T {
    return this.from(super.ushln(b));
  }

  /**
   * @description shift left
   */
  iushln(b: number): T {
    return this.from(super.iushln(b));
  }

  /**
   * @description shift right
   */
  shrn(b: number): T {
    return this.from(super.shrn(b));
  }

  /**
   * @description shift right (unimplemented https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086)
   */
  ishrn(b: number): T {
    return this.from(super.ishrn(b));
  }

  /**
   * @description shift right
   */
  ushrn(b: number): T {
    return this.from(super.ushrn(b));
  }
  /**
   * @description shift right
   */

  iushrn(b: number): T {
    return this.from(super.iushrn(b));
  }
  /**
   * @description  test if specified bit is set
   */

  maskn(b: number): T {
    return this.from(super.maskn(b));
  }
  /**
   * @description clear bits with indexes higher or equal to `b`
   */

  imaskn(b: number): T {
    return this.from(super.imaskn(b));
  }
  /**
   * @description add `1 << b` to the number
   */

  bincn(b: number): T {
    return this.from(super.bincn(b));
  }

  /**
   * @description not (for the width specified by `w`)
   */
  notn(w: number): T {
    return this.from(super.notn(w));
  }

  /**
   * @description not (for the width specified by `w`)
   */
  inotn(w: number): T {
    return this.from(super.inotn(w));
  }

  /**
   * @description GCD
   */
  gcd(b: BN): T {
    return this.from(super.gcd(b));
  }

  /**
   * @description Extended GCD results `({ a: ..., b: ..., gcd: ... })`
   */
  egcd(bn: BN): {a: T; b: T; gcd: T} {
    const {a, b, gcd} = super.egcd(bn);
    return {a: this.from(a), b: this.from(b), gcd: this.from(gcd)};
  }

  /**
   * @description inverse `a` modulo `b`
   */
  invm(b: BN): T {
    return this.from(super.invm(b));
  }

  /**
   * Convert to BigInt type
   * @returns BigInt
   */
  toBigInt(): bigint {
    return BigInt(this.toString());
  }

  toJSON(): string {
    return this.toString();
  }

  toString(base: number | 'hex' = 10, length?: number): string {
    return super.toString(base, length);
  }

  abstract from(bn: BN | number | string): T;
}
