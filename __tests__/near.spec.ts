import { NEAR } from '../src';

describe.each`
  input          | yocto                                | human
  ${'1'}         |       ${'1000000000000000000000000'} | ${'1 N'}
  ${'1.0'}       |       ${'1000000000000000000000000'} | ${'1 N'}
  ${'0.000_101'} |           ${'101000000000000000000'} | ${'101 mN'}
  ${'0.000,101'} |           ${'101000000000000000000'} | ${'101 mN'}
  ${'1,000'}     |    ${'1000000000000000000000000000'} | ${'1,000 N'}
  ${'1,000,000'} | ${'1000000000000000000000000000000'} | ${'1,000,000 N'}
`('NEAR.parse("$input")', ({ input, yocto }) => {
  const n = NEAR.parse(input);

  test(`toJSON() === "${yocto}"`, () => {
    expect(n.toJSON()).toBe(yocto);
  })

  // test(`toHuman() === "${human}"`, () => {
  //   expect(n.toHuman()).toBe(human);
  // })
})