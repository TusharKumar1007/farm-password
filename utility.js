/**
 * Generates an array of lowercase alphabetic characters ('a' to 'z').
 * @returns {string[]} An array containing all lowercase letters.
 */
export const genLowerLetters = () => {
        return Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
};

/**
 * Generates an array of uppercase alphabetic characters ('A' to 'Z').
 * @returns {string[]} An array containing all uppercase letters.
 */
export const genUpperLetters = () => {
        return Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
};

/**
 * Generates an array of common symbol characters (from ASCII code 33 to 46).
 * @returns {string[]} An array containing common symbols like '!', '"', '#', etc.
 */
export const genSymbols = () => {
        return Array.from({ length: 14 }, (_, i) => String.fromCharCode(i + 33));
};

/**
 * Generates an array of numeric characters ('0' to '9').
 * @returns {number[]} An array containing all digits from 0 to 9.
 */
export const genNumbers = () => {
        return Array(10).fill(10).map((_, i) => i);
};

/**
 * Generates a random number between two given values, inclusive.
 * @param {number} x The lower bound.
 * @param {number} y The upper bound.
 * @returns {number} A random number between x and y, inclusive.
 */
export const randomNumIn = (x, y) => {
        return x + Math.round(Math.random() * (y - x));
};

/**
 * Shuffles an array in place or returns a new shuffled array.
 * @param {Array} arr The array to shuffle.
 * @param {boolean} [inPlace=false] Whether to modify the original array or return a new one. Default is false.
 * @returns {Array} The shuffled array. If `inPlace` is false, returns a new shuffled array. Otherwise, modifies the original array.
 */
export const shuffle = (arr, inPlace = false) => {
        const arrLength = arr.length;
        if (!inPlace) {
                const protoArr = [...arr];
                arr = protoArr;
        }
        for (let i = arrLength - 1; i >= 0; i--) {
                const j = randomNumIn(0, i);
                [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        if (!inPlace) {
                return arr;
        }
};

/**
 * Selects random characters from multiple lists and returns a shuffled array of characters.
 * @param {number} [charLength=25] The number of characters to generate.
 * @param {string[][]} lists An array of arrays containing character lists (e.g., letters, symbols, numbers).
 * @returns {string[]} A shuffled array of randomly picked characters from the provided lists.
 */
export const shuffleMax = (charLength = 25, lists) => {
        const arr = [];
        for (let i = 0; i < charLength; i++) {
                const randomListNumber = Math.floor(Math.random() * lists.length);
                const randomLst = lists[randomListNumber];
                const randomNumber = Math.floor(Math.random() * randomLst.length);
                arr.push(randomLst[randomNumber]);
        }
        return arr;
};

/**
 * Generates a password by randomly selecting characters from predefined lists (lowercase, uppercase, symbols, numbers),
 * then shuffling them to create a secure, random password.
 * @param {number} [charLength=25] The length of the password to generate. Default is 25 characters.
 * @returns {string} The generated random password.
 */
export const genPassword = (charLength = 25) => {
        const password = shuffle(shuffleMax(charLength, passLists)).join('');
        return password;
};
