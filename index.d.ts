/**
 * Generates an array of lowercase alphabetic characters ('a' to 'z').
 * @returns {string[]} An array containing all lowercase letters.
 */
export function genLowerLetters(): string[];

/**
 * Generates an array of uppercase alphabetic characters ('A' to 'Z').
 * @returns {string[]} An array containing all uppercase letters.
 */
export function genUpperLetters(): string[];

/**
 * Generates an array of numeric characters ('0' to '9').
 * @returns {string[]} An array containing all digits from 0 to 9.
 */
export function genNumbers(): string[];

/**
 * Generates an array of common symbol characters (from ASCII code 33 to 46).
 * @returns {string[]} An array containing common symbols like '!', '"', '#', etc.
 */
export function genSymbols(): string[];

/**
 * Generates a random number between two given values, inclusive.
 * @param {number} x The lower bound.
 * @param {number} y The upper bound.
 * @returns {number} A random number between x and y, inclusive.
 */
export const randomNumIn: (x: number, y: number) => number;

/**
 * Shuffles an array, with option for in-place modification.
 * @param {T[]} arr The array to shuffle.
 * @param {boolean} [inPlace=false] Whether to modify the original array or return a new one. Default is false.
 * @returns {T[]} The shuffled array. If `inPlace` is false, returns a new shuffled array. Otherwise, modifies the original array.
 */
export const shuffle: <T>(arr: T[], inPlace?: boolean) => T[];

/**
 * Randomly picks characters from multiple character lists and returns a shuffled array of characters.
 * @param {number} [charLength=25] The number of characters to generate.
 * @param {string[][]} lists An array of arrays containing character lists (e.g., letters, symbols, numbers).
 * @returns {string[]} A shuffled array of randomly picked characters from the provided lists.
 */
export function shuffleMax(
  charLength?: number,
  lists?: string[][] 
): string[];


/**
 * A utility function to collect a specified number of random elements from an array, 
 * allowing duplicates in the collected array.
 * 
 * @param arr The array to collect random elements from.
 * @param population The number of random elements to collect. Defaults to 5.
 * @returns An array of random elements, which may include duplicates.
 */
declare function collect<T>(arr: T[], population?: number): T[];

/**
 * A utility function to sample a specified number of unique random elements from an array.
 * 
 * Throws an error if there aren't enough unique elements in the array to meet the requested population.
 * 
 * @param arr The array to sample unique random elements from.
 * @param population The number of unique random elements to sample. Defaults to 5.
 * @returns An array of unique random elements, or `undefined` if an error occurs.
 * @throws Error If the number of unique elements in the array is less than the requested population.
 */
declare function sample<T>(arr: T[], population?: number): T[] | undefined;

export { collect, sample };

/**
 * Generates a password by randomly selecting characters from predefined lists (lowercase, uppercase, symbols, numbers),
 * then shuffling them to create a secure, random password.
 * @param {number} [charLength=25] The length of the password to generate. Default is 25 characters.
 * @returns {string} The generated random password.
 */
export function genPassword(
  charLength?: number
): string;
