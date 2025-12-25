export function genLowerLetters(): string[];
export function genUpperLetters(): string[];
export function genNumbers(): string[];
export function genSymbols(): string[];

/**
 * Randomly picks characters from multiple character lists
 *
 * @param charLength Length of the resulting character array
 * @param lists Array of character arrays
 * @returns Array of randomly selected characters
 */
export function shuffleMax(
  charLength?: number,
  lists: string[][]
): string[];

/**
 * Generate a password using default character lists
 * (lowercase, uppercase, numbers, symbols)
 *
 * @param charLength Length of the password
 * @returns Generated password string
 */
export function genPassword(
  charLength?: number
): string;
