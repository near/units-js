#!/usr/bin/env node
import process from 'process';
import {parse} from './parse';

const HELP = `Parse and format NEAR tokens and gas units. Examples:

    near-units 10 N # => 10000000000000000000000000
    near-units -h 10000000000000000000000000 yN # => 10 N
    near-units 50 Tgas # => 50000000000000
    near-units -h 50000000000000 gas # => 50 Tgas
`;

let args = process.argv.slice(2);

if (args.length === 0) {
  console.log(HELP);
  process.exit(0);
}

let wantsHuman = false;
if (args.length > 1 && args.includes('-h')) {
  wantsHuman = true;
  args = args.filter((x) => x !== '-h');
}

const input = args.join('');

if (input === '--help') {
  console.log(HELP);
  process.exit(0);
}

try {
  if (wantsHuman) {
    console.log(parse(input).toHuman());
  } else {
    console.log(parse(input).toJSON());
  }
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(error);
  }

  process.exit(1);
}
