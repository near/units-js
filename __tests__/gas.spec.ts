import {Gas} from '../src';

describe.each`
  input                  | gas                | human
  ${'1'}                 | ${'1'}             | ${'1 gas'}
  ${'1,000'}             | ${'1000'}          | ${'1 kgas'}
  ${'1,000,000'}         | ${'1000000'}       | ${'1 Mgas'}
  ${'1,000,000,000'}     | ${'1000000000'}    | ${'1 Ggas'}
  ${'1,000,000,000,000'} | ${'1000000000000'} | ${'1 Tgas'}
`('NEAR.parse("$input")', ({input, gas, human}) => {
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
});
