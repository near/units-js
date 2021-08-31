import {NEAR} from '../src';

describe.each`
  input                     | yocto                                | human
  ${'1'}                    | ${'1000000000000000000000000'}       | ${'1 N'}
  ${'1.0'}                  | ${'1000000000000000000000000'}       | ${'1 N'}
  ${'1,000'}                | ${'1000000000000000000000000000'}    | ${'1,000 N'}
  ${'1,000,000'}            | ${'1000000000000000000000000000000'} | ${'1,000,000 N'}
  ${'1,000,000.000_000_01'} | ${'1000000000000010000000000000000'} | ${'1,000,000.00000001 N'}
  ${'0.001_101'}            | ${'1101000000000000000000'}          | ${'1.101 mN'}
  ${'0.000,101'}            | ${'101000000000000000000'}           | ${'101 μN'}
`('NEAR.parse("$input")', ({input, yocto, human}) => {
  const n = NEAR.parse(input);

  test(`toJSON() === "${yocto}"`, () => {
    expect(n.toJSON()).toBe(yocto);
  });

  test(`toHuman() === "${human}"`, () => {
    expect(n.toHuman()).toBe(human);
  });
});

describe('NEAR.parse() errors', () => {
  test('blank input', () => {
    expect(() => {
      NEAR.parse('');
    }).toThrow('invalid input string');
  });

  test('too many dots (10.000.1)', () => {
    expect(() => {
      NEAR.parse('10.000.1');
    }).toThrow('Cannot parse');
  });

  test('too many decimals', () => {
    expect(() => {
      NEAR.parse('0.000_000_000_000_000_000_000_000_1');
    }).toThrow('Cannot parse');
  });
});
