import BN from 'bn.js';

export class Gas extends BN {
  toJSON(): string {
    return this.toString(10);
  }
}
