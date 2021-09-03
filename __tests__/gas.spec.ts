import BN from 'bn.js';
import {Gas} from '../src';

describe.each`
  input                  | gas                | human
  ${'1'}                 | ${'1'}             | ${'1 gas'}
  ${'1,000'}             | ${'1000'}          | ${'1 kgas'}
  ${'1,000,000'}         | ${'1000000'}       | ${'1 Mgas'}
  ${'1,000,000,000'}     | ${'1000000000'}    | ${'1 Ggas'}
  ${'1,000,000,000,000'} | ${'1000000000000'} | ${'1 Tgas'}
  ${'1Tgas'}             | ${'1000000000000'} | ${'1 Tgas'}
  ${'1Ggas'}             | ${'1000000000'}    | ${'1 Ggas'}
`('Gas.parse("$input")', ({input, gas, human}) => {
  const g = Gas.parse(input);

  test(`toJSON() === "${gas}"`, () => {
    expect(g.toJSON()).toBe(gas);
  });

  test(`toHuman() === "${human}"`, () => {
    expect(g.toHuman()).toBe(human);
  });
});

describe('Gas.parse() errors', () => {
  test('blank input', () => {
    expect(() => {
      Gas.parse('');
    }).toThrow('invalid input string');
  });

  test('decimals with no metric prefix', () => {
    expect(() => {
      Gas.parse('0.1 gas');
    }).toThrow('Cannot parse');
  });
});

describe.each`
  fromInput    | parseInput
  ${'1'}       | ${'1'}
  ${'1'}       | ${'1 gas'}
  ${1}         | ${'1'}
  ${new BN(1)} | ${'1'}
`('Gas.from("$input")', ({fromInput, parseInput}) => {
  const n = Gas.from(fromInput);
  test(`== Gas.parse(${parseInput})`, () => {
    expect(n).toStrictEqual(Gas.parse(parseInput));
  });
});
