/**
 * Generates an array of lowercase letters
 */
export function genLowerLetters(): string[];

/**
 * Generates an array of uppercase letters
 */
export function genUpperLetters(): string[];

/**
 * Generates an array of numeric characters
 */
export function genNumbers(): string[];

/**
 * Generates an array of symbol characters
 */
export function genSymbols(): string[];

/**
 * Generates a random number within a specified range (inclusive)
 * @param x Lower bound
 * @param y Upper bound
 */
export const randomNumIn: (x: number, y: number) => number;

/**
 * Shuffles an array, with option for in-place modification
 * @param arr Array to shuffle
 * @param inPlace Whether to modify the original array
 */
export const shuffle: <T>(arr: T[], inPlace?: boolean) => T[];

/**
 * Randomly picks characters from multiple character lists
 * @param charLength Length of the resulting character array
 * @param lists Array of character arrays
 */
export function shuffleMax(
  charLength?: number,
  lists?: string[][]
): string[];

/**
 * Generate a password using default character lists
 * @param charLength Length of the password
 */
export function genPassword(
  charLength?: number
): string;

