import {parse} from '../src';

describe.each`
  input      | human
  ${'1Tgas'} | ${'1 Tgas'}
  ${'1mN'}   | ${'1 mN'}
`('parse("$input")', ({input, human}) => {
  const x = parse(input);

  test(`toHuman() === "${human}"`, () => {
    expect(x.toHuman()).toBe(human);
  });
});

describe('parse() errors', () => {
  test('invalid unit', () => {
    expect(() => {
      parse('1 T');
    }).toThrow('Cannot parse');
  });

  test('invalid metric prefix', () => {
    expect(() => {
      parse('1 lolNEAR');
    }).toThrow('Unknown metric prefix: lol');
  });
});
