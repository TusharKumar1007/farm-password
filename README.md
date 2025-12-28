# farm-password

A simple password generator for Node.js with handy character arrays and CLI support.  
Generates secure random passwords using lowercase, uppercase, numbers, and symbols.

## Package Information

🔗 **npm Package**: [https://www.npmjs.com/package/@tushardev01/farm-password](https://www.npmjs.com/package/@tushardev01/farm-password)

---

## Features

- Generate passwords of custom length
- Built-in arrays: lowercase letters, uppercase letters, numbers, symbols
- Shuffle characters from multiple arrays
- CLI support (`genpass`)
- TypeScript typings included


#### To use genpass cli:
```bash
npm install -g @tushardev01/farm-password
genpass 
genpass -c
```

- `genpass`: logs random password
- `genpass -c`: logs random password and copies to clipboard


---

## Installation

```bash
npm install @tushardev01/farm-password
```

# Usage (JavaScript / ESM)
```bash
import { genPassword, shuffleMax, genLowerLetters, genUpperLetters, genNumbers, genSymbols, randomNumIn, shuffle,collect, sample } from '@tushardev01/farm-password';

// Generate a password with default character sets
const password1 = genPassword(16);
console.log(password1); // Example: 'aB3@fGh1$Jk2LmN4'

// Create a custom character array
const customChars = [
  genLowerLetters(),
  genUpperLetters(),
  genNumbers(),
  genSymbols()
];

// Shuffle and pick 12 characters
const shuffled = shuffle(shuffleMax(12, customChars)).join('');
console.log(shuffled); // Example: '@B3a1C$dEfG2'
```
# CLI Usage

After installing, you can run:
```bash
npx genpass
# or, if installed globally
genpass
```
This generates a password with default settings.

### Functions

```bash
genPassword(charLength?: number): string
    Generates a password using default arrays
    charLength – optional, default is 25

shuffleMax(charLength?: number, lists: string[][]): string[]
    Randomly picks characters from multiple character arrays
    charLength – optional, default 25
    lists – array of string arrays, e.g., [genLowerLetters(), genNumbers()]

genLowerLetters(): string[]
    Returns lowercase letters: ['a','b',...,'z']

genUpperLetters(): string[]
    Returns uppercase letters: ['A','B',...,'Z']

genNumbers(): string[]
    Returns numbers: ['0','1',...,'9']

genSymbols(): string[]
    Returns symbols: ['!','@','#','$','%','^','&','*','(',')']

randomNumIn(x,y): number
    Returns a random Number [x,y] i.e. including x,y and numbers in between

shuffle(arr: any[],inPlace: boolean): any[]
    Returns a new array or the same one with items shuffled

collect<T>(arr: T[], population?: number): T[]
    Returns an array of randomly selected elements (duplicates allowed).

sample<T>(arr: T[], population?: number): T[] | undefined
    Returns an array of randomly selected unique elements (no duplicates).

```

### TypeScript Support
```bash
import { genPassword, shuffleMax, shuffle, randomNumIn, sample, collect } from '@tushardev01/farm-password';

const password: string = genPassword(16);
const chars: string[] = shuffleMax(12, [
  genLowerLetters(),
  genNumbers(),
]);
```

Types are included automatically via index.d.ts.

### License

ISC © Tushar Kumar
