#!/usr/bin/env node

import clipboard from 'clipboardy';
import {genLowerLetters,
	genUpperLetters,
	genNumbers,
	genSymbols,
	shuffleMax,
	genPassword,
	randomNumIn,
	shuffle,
} from './utility.js';

const flag = process.argv[2]

if(flag && flag==='-c'){
  const password=genPassword();
  console.log(password);
  
  clipboard.writeSync(password)
  console.log("Copied to clipboard!!");
}
export{
  genLowerLetters,
  genUpperLetters,
  genNumbers,
  genSymbols,
  shuffleMax,
  genPassword,
  randomNumIn,
  shuffle
};
