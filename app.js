#!/usr/bin/env node

import clipboard from 'clipboardy';
import {
  genLowerLetters,
  genUpperLetters,
  genNumbers,
  genSymbols,
  shuffleMax,
  genPassword,
  randomNumIn,
  shuffle,
} from './utility.js';

const flag = process.argv[2]
const isCalledByGenPass = process.argv[1].includes("@tushardev01");

if (isCalledByGenPass) {
  const password = genPassword();
  console.log(password);

  if (flag && flag === '-c') {
    clipboard.writeSync(password)
    console.log("Copied to clipboard!!");
  }
}
export {
  genLowerLetters,
  genUpperLetters,
  genNumbers,
  genSymbols,
  shuffleMax,
  genPassword,
  randomNumIn,
  shuffle
};
