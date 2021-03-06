import BN from 'bn.js';
import {NEAR} from '../src';

describe.each`
  input                     | yocto                                | human
  ${'1'}                    | ${'1000000000000000000000000'}       | ${'1 N'}
  ${'.1000000000000'}       | ${'100000000000000000000000'}        | ${'100 mN'}
  ${'1.0'}                  | ${'1000000000000000000000000'}       | ${'1 N'}
  ${'1,000'}                | ${'1000000000000000000000000000'}    | ${'1,000 N'}
  ${'1,000,000'}            | ${'1000000000000000000000000000000'} | ${'1,000,000 N'}
  ${'1,000,000.000_000_01'} | ${'1000000000000010000000000000000'} | ${'1,000,000.00000001 N'}
  ${'1MN'}                  | ${'1000000000000000000000000000000'} | ${'1,000,000 N'}
  ${'1kN'}                  | ${'1000000000000000000000000000'}    | ${'1,000 N'}
  ${'0.001_101'}            | ${'1101000000000000000000'}          | ${'1.101 mN'}
  ${'0.000,101'}            | ${'101000000000000000000'}           | ${'101 μN'}
  ${'1mN'}                  | ${'1000000000000000000000'}          | ${'1 mN'}
  ${'1 mN'}                 | ${'1000000000000000000000'}          | ${'1 mN'}
  ${' 001      m N    '}    | ${'1000000000000000000000'}          | ${'1 mN'}
  ${'1 milliNEAR'}          | ${'1000000000000000000000'}          | ${'1 mN'}
  ${'1 milliN'}             | ${'1000000000000000000000'}          | ${'1 mN'}
  ${'1 millinear'}          | ${'1000000000000000000000'}          | ${'1 mN'}
  ${'1 milli'}              | ${'1000000000000000000000'}          | ${'1 mN'}
  ${'1 m'}                  | ${'1000000000000000000000'}          | ${'1 mN'}
  ${'1μ'}                   | ${'1000000000000000000'}             | ${'1 μN'}
  ${'1micro'}               | ${'1000000000000000000'}             | ${'1 μN'}
  ${'1nN'}                  | ${'1000000000000000'}                | ${'1 nN'}
  ${'1p'}                   | ${'1000000000000'}                   | ${'1 pN'}
  ${'1f'}                   | ${'1000000000'}                      | ${'1 fN'}
  ${'1a'}                   | ${'1000000'}                         | ${'1 aN'}
  ${'1z'}                   | ${'1000'}                            | ${'1 zN'}
  ${'1y'}                   | ${'1'}                               | ${'1 yN'}
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

  test('decimals when using yocto', () => {
    expect(() => {
      NEAR.parse('0.1yN');
    }).toThrow('Cannot parse');
  });

  test("bald nano prefix, '1n', ambiguous with NEAR designation, '1N'", () => {
    expect(NEAR.parse('1n').toHuman()).toBe('1 N');
  });
});

describe.each`
  fromInput    | parseInput
  ${'1'}       | ${'1 yN'}
  ${1}         | ${'1 yN'}
  ${new BN(1)} | ${'1 yN'}
`('NEAR.from("$fromInput")', ({fromInput, parseInput}) => {
  const n = NEAR.from(fromInput);
  test(`== NEAR.parse(${parseInput})`, () => {
    expect(n).toStrictEqual(NEAR.parse(parseInput));
  });
});
