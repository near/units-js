import _BN from 'bn.js';

export class BN extends _BN {
  toJSON(): string {
    return this.toString(10);
  }
}
