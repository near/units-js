import BN from 'bn.js';

export class BNWrapper<T extends BN> extends BN {
  /**
   * @description returns the maximum of 2 BN instances.
   */
  max(other: BN): T {
    return BN.max(this, other) as T;
  }

  /**
   * @description returns the minimum of 2 BN instances.
   */
  min(other: BN): T {
    return BN.min(this, other) as T;
  }

  /**
   * @description  clone number
   */
  clone(): T {
    return super.clone() as T;
  }

  /**
   * @description convert to two's complement representation, where width is bit width
   */
  toTwos(width: number): T {
    return super.toTwos(width) as T;
  }

  /**
   * @description  convert from two's complement representation, where width is the bit width
   */
  fromTwos(width: number): T {
    return super.fromTwos(width) as T;
  }

  /**
   * @description negate sign
   */
  neg(): T {
    return super.neg() as T;
  }

  /**
   * @description negate sign
   */
  ineg(): T {
    return super.ineg() as T;
  }

  /**
   * @description absolute value
   */
  abs(): T {
    return super.abs() as T;
  }

  /**
   * @description absolute value
   */
  iabs(): T {
    return super.iabs() as T;
  }

  /**
   * @description addition
   */
  add(b: BN): T {
    return super.add(b) as T;
  }

  /**
   * @description  addition
   */
  iadd(b: BN): T {
    return super.iadd(b) as T;
  }

  /**
   * @description addition
   */
  addn(b: number): T {
    return super.addn(b) as T;
  }

  /**
   * @description addition
   */
  iaddn(b: number): T {
    return super.iaddn(b) as T;
  }

  /**
   * @description subtraction
   */
  sub(b: BN): T {
    return super.sub(b) as T;
  }

  /**
   * @description subtraction
   */
  isub(b: BN): T {
    return super.isub(b) as T;
  }

  /**
   * @description subtraction
   */
  subn(b: number): T {
    return super.subn(b) as T;
  }

  /**
   * @description subtraction
   */
  isubn(b: number): T {
    return super.isubn(b) as T;
  }

  /**
   * @description multiply
   */
  mul(b: BN): T {
    return super.mul(b) as T;
  }

  /**
   * @description multiply
   */
  imul(b: BN): T {
    return super.imul(b) as T;
  }

  /**
   * @description multiply
   */
  muln(b: number): T {
    return super.muln(b) as T;
  }

  /**
   * @description multiply
   */
  imuln(b: number): T {
    return super.imuln(b) as T;
  }

  /**
   * @description square
   */
  sqr(): T {
    return super.sqr() as T;
  }

  /**
   * @description square
   */
  isqr(): T {
    return super.isqr() as T;
  }

  /**
   * @description raise `a` to the power of `b`
   */
  pow(b: BN): T {
    return super.pow(b) as T;
  }

  /**
   * @description divide
   */
  div(b: BN): T {
    return super.div(b) as T;
  }

  /**
   * @description divide
   */
  divn(b: number): T {
    return super.divn(b) as T;
  }

  /**
   * @description divide
   */
  idivn(b: number): T {
    return super.idivn(b) as T;
  }

  /**
   * @description reduct
   */
  mod(b: BN): T {
    return super.mod(b) as T;
  }

  /**
   * @description reduct
   */
  umod(b: BN): T {
    return super.umod(b) as T;
  }

  /**
   * @description  rounded division
   */
  divRound(b: BN): T {
    return super.divRound(b) as T;
  }

  /**
   * @description or
   */
  or(b: BN): T {
    return super.or(b) as T;
  }

  /**
   * @description or
   */
  ior(b: BN): T {
    return super.ior(b) as T;
  }

  /**
   * @description or
   */
  uor(b: BN): T {
    return super.uor(b) as T;
  }

  /**
   * @description or
   */
  iuor(b: BN): T {
    return super.iuor(b) as T;
  }

  /**
   * @description and
   */
  and(b: BN): T {
    return super.and(b) as T;
  }

  /**
   * @description and
   */
  iand(b: BN): T {
    return super.iand(b) as T;
  }

  /**
   * @description and
   */
  uand(b: BN): T {
    return super.uand(b) as T;
  }

  /**
   * @description and
   */
  iuand(b: BN): T {
    return super.iuand(b) as T;
  }

  /**
   * @description and (NOTE: `andln` is going to be replaced with `andn` in future)
   */
  andln(b: number): T {
    return super.andln(b) as T;
  }

  /**
   * @description xor
   */
  xor(b: BN): T {
    return super.xor(b) as T;
  }

  /**
   * @description xor
   */
  ixor(b: BN): T {
    return super.ixor(b) as T;
  }

  /**
   * @description xor
   */
  uxor(b: BN): T {
    return super.uxor(b) as T;
  }

  /**
   * @description xor
   */
  iuxor(b: BN): T {
    return super.iuxor(b) as T;
  }

  /**
   * @description set specified bit to 1
   */
  setn(b: number): T {
    return super.setn(b) as T;
  }

  /**
   * @description shift left
   */
  shln(b: number): T {
    return super.shln(b) as T;
  }

  /**
   * @description shift left
   */
  ishln(b: number): T {
    return super.ishln(b) as T;
  }

  /**
   * @description shift left
   */
  ushln(b: number): T {
    return super.ushln(b) as T;
  }

  /**
   * @description shift left
   */
  iushln(b: number): T {
    return super.iushln(b) as T;
  }

  /**
   * @description shift right
   */
  shrn(b: number): T {
    return super.shrn(b) as T;
  }

  /**
   * @description shift right (unimplemented https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086)
   */
  ishrn(b: number): T {
    return super.ishrn(b) as T;
  }

  /**
   * @description shift right
   */
  ushrn(b: number): T {
    return super.ushrn(b) as T;
  }
  /**
   * @description shift right
   */

  iushrn(b: number): T {
    return super.iushrn(b) as T;
  }
  /**
   * @description  test if specified bit is set
   */

  maskn(b: number): T {
    return super.maskn(b) as T;
  }
  /**
   * @description clear bits with indexes higher or equal to `b`
   */

  imaskn(b: number): T {
    return super.imaskn(b) as T;
  }
  /**
   * @description add `1 << b` to the number
   */

  bincn(b: number): T {
    return super.bincn(b) as T;
  }

  /**
   * @description not (for the width specified by `w`)
   */
  notn(w: number): T {
    return super.notn(w) as T;
  }

  /**
   * @description not (for the width specified by `w`)
   */
  inotn(w: number): T {
    return super.inotn(w) as T;
  }

  /**
   * @description GCD
   */
  gcd(b: BN): T {
    return super.gcd(b) as T;
  }

  /**
   * @description Extended GCD results `({ a: ..., b: ..., gcd: ... })`
   */
  egcd(b: BN): {a: T; b: T; gcd: T} {
    return super.egcd(b) as {a: T; b: T; gcd: T};
  }

  /**
   * @description inverse `a` modulo `b`
   */
  invm(b: BN): T {
    return super.invm(b) as T;
  }
}
