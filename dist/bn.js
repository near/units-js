"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BNWrapper = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
class BNWrapper extends bn_js_1.default {
    /**
     * @description returns the maximum of 2 BN instances.
     */
    max(other) {
        return bn_js_1.default.max(this, other);
    }
    /**
     * @description returns the minimum of 2 BN instances.
     */
    min(other) {
        return bn_js_1.default.min(this, other);
    }
    /**
     * @description  clone number
     */
    clone() {
        return super.clone();
    }
    /**
     * @description convert to two's complement representation, where width is bit width
     */
    toTwos(width) {
        return super.toTwos(width);
    }
    /**
     * @description  convert from two's complement representation, where width is the bit width
     */
    fromTwos(width) {
        return super.fromTwos(width);
    }
    /**
     * @description negate sign
     */
    neg() {
        return super.neg();
    }
    /**
     * @description negate sign
     */
    ineg() {
        return super.ineg();
    }
    /**
     * @description absolute value
     */
    abs() {
        return super.abs();
    }
    /**
     * @description absolute value
     */
    iabs() {
        return super.iabs();
    }
    /**
     * @description addition
     */
    add(b) {
        return super.add(b);
    }
    /**
     * @description  addition
     */
    iadd(b) {
        return super.iadd(b);
    }
    /**
     * @description addition
     */
    addn(b) {
        return super.addn(b);
    }
    /**
     * @description addition
     */
    iaddn(b) {
        return super.iaddn(b);
    }
    /**
     * @description subtraction
     */
    sub(b) {
        return super.sub(b);
    }
    /**
     * @description subtraction
     */
    isub(b) {
        return super.isub(b);
    }
    /**
     * @description subtraction
     */
    subn(b) {
        return super.subn(b);
    }
    /**
     * @description subtraction
     */
    isubn(b) {
        return super.isubn(b);
    }
    /**
     * @description multiply
     */
    mul(b) {
        return super.mul(b);
    }
    /**
     * @description multiply
     */
    imul(b) {
        return super.imul(b);
    }
    /**
     * @description multiply
     */
    muln(b) {
        return super.muln(b);
    }
    /**
     * @description multiply
     */
    imuln(b) {
        return super.imuln(b);
    }
    /**
     * @description square
     */
    sqr() {
        return super.sqr();
    }
    /**
     * @description square
     */
    isqr() {
        return super.isqr();
    }
    /**
     * @description raise `a` to the power of `b`
     */
    pow(b) {
        return super.pow(b);
    }
    /**
     * @description divide
     */
    div(b) {
        return super.div(b);
    }
    /**
     * @description divide
     */
    divn(b) {
        return super.divn(b);
    }
    /**
     * @description divide
     */
    idivn(b) {
        return super.idivn(b);
    }
    /**
     * @description reduct
     */
    mod(b) {
        return super.mod(b);
    }
    /**
     * @description reduct
     */
    umod(b) {
        return super.umod(b);
    }
    /**
     * @description  rounded division
     */
    divRound(b) {
        return super.divRound(b);
    }
    /**
     * @description or
     */
    or(b) {
        return super.or(b);
    }
    /**
     * @description or
     */
    ior(b) {
        return super.ior(b);
    }
    /**
     * @description or
     */
    uor(b) {
        return super.uor(b);
    }
    /**
     * @description or
     */
    iuor(b) {
        return super.iuor(b);
    }
    /**
     * @description and
     */
    and(b) {
        return super.and(b);
    }
    /**
     * @description and
     */
    iand(b) {
        return super.iand(b);
    }
    /**
     * @description and
     */
    uand(b) {
        return super.uand(b);
    }
    /**
     * @description and
     */
    iuand(b) {
        return super.iuand(b);
    }
    /**
     * @description and (NOTE: `andln` is going to be replaced with `andn` in future)
     */
    andln(b) {
        return super.andln(b);
    }
    /**
     * @description xor
     */
    xor(b) {
        return super.xor(b);
    }
    /**
     * @description xor
     */
    ixor(b) {
        return super.ixor(b);
    }
    /**
     * @description xor
     */
    uxor(b) {
        return super.uxor(b);
    }
    /**
     * @description xor
     */
    iuxor(b) {
        return super.iuxor(b);
    }
    /**
     * @description set specified bit to 1
     */
    setn(b) {
        return super.setn(b);
    }
    /**
     * @description shift left
     */
    shln(b) {
        return super.shln(b);
    }
    /**
     * @description shift left
     */
    ishln(b) {
        return super.ishln(b);
    }
    /**
     * @description shift left
     */
    ushln(b) {
        return super.ushln(b);
    }
    /**
     * @description shift left
     */
    iushln(b) {
        return super.iushln(b);
    }
    /**
     * @description shift right
     */
    shrn(b) {
        return super.shrn(b);
    }
    /**
     * @description shift right (unimplemented https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086)
     */
    ishrn(b) {
        return super.ishrn(b);
    }
    /**
     * @description shift right
     */
    ushrn(b) {
        return super.ushrn(b);
    }
    /**
     * @description shift right
     */
    iushrn(b) {
        return super.iushrn(b);
    }
    /**
     * @description  test if specified bit is set
     */
    maskn(b) {
        return super.maskn(b);
    }
    /**
     * @description clear bits with indexes higher or equal to `b`
     */
    imaskn(b) {
        return super.imaskn(b);
    }
    /**
     * @description add `1 << b` to the number
     */
    bincn(b) {
        return super.bincn(b);
    }
    /**
     * @description not (for the width specified by `w`)
     */
    notn(w) {
        return super.notn(w);
    }
    /**
     * @description not (for the width specified by `w`)
     */
    inotn(w) {
        return super.inotn(w);
    }
    /**
     * @description GCD
     */
    gcd(b) {
        return super.gcd(b);
    }
    /**
     * @description Extended GCD results `({ a: ..., b: ..., gcd: ... })`
     */
    egcd(b) {
        return super.egcd(b);
    }
    /**
     * @description inverse `a` modulo `b`
     */
    invm(b) {
        return super.invm(b);
    }
}
exports.BNWrapper = BNWrapper;
//# sourceMappingURL=bn.js.map