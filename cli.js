#!/usr/bin/env node

import clipboard from 'clipboardy';
import { genPassword } from './utility.js';

const args = process.argv.slice(2);
const copy = args.includes('-c');

const password = genPassword();
console.log(password);

if (copy) {
    clipboard.writeSync(password);
    console.log('Copied to clipboard!!');
}

