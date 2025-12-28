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
 * Collects a specified number of random elements from an array (with possible duplicates).
 * 
 * @param {Array} arr - The array from which to collect random elements.
 * @param {number} [population=5] - The number of random elements to collect. Defaults to 5.
 * 
 * @returns {Array} A new array containing the randomly collected elements. The array may contain duplicates.
 * 
 * @example
 * const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
 * const collected = collect(fruits, 3);  // Could return ['banana', 'apple', 'banana']
 */
export const collect=(arr, population = 5)=> {
        const collectedArray = [];
        for (let i = 0; i < population; i++) {
                const randomNumber = randomNumIn(0, arr.length - 1);
                collectedArray.push(arr[randomNumber]);
        }
        return collectedArray;
}

/**
 * Samples a specified number of unique random elements from an array (no duplicates).
 * 
 * If the array has fewer unique elements than the requested population, an error will be thrown.
 * 
 * @param {Array} arr - The array from which to sample unique random elements.
 * @param {number} [population=5] - The number of unique random elements to sample. Defaults to 5.
 * 
 * @returns {Array|undefined} An array of unique sampled elements, or `undefined` if an error occurs.
 * 
 * @throws {Error} Throws an error if there are not enough unique elements in the array to meet the requested population.
 * 
 * @example
 * const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
 * const sampled = sample(fruits, 3);  // Could return ['banana', 'apple', 'cherry']
 * 
 * @example
 * const fruits = ['apple', 'banana', 'apple', 'banana'];
 * sample(fruits, 3);  // Throws an error: "Array length without duplicates must be greater than population."
 */
export const sample=(arr, population = 5) =>{
        const set = new Set();
        try {
                if (new Set(arr).size < population) {
                        throw new Error("Array length without duplicates must be greater than population. Use collect function instead.");
                }
                while (set.size !== population) {
                        const randomNumber = randomNumIn(0, arr.length - 1);
                        set.add(arr[randomNumber]);
                }

                return [...set];
        } catch (e) {
                console.error(e);
                return undefined;
        }
}


/**
 * Generates a password by randomly selecting characters from predefined lists (lowercase, uppercase, symbols, numbers),
 * then shuffling them to create a secure, random password.
 * @param {number} [charLength=25] The length of the password to generate. Default is 25 characters.
 * @returns {string} The generated random password.
 */
const passLists = [genLowerLetters(), genNumbers(), genSymbols(), genUpperLetters()];
export const genPassword = (charLength = 25) => {
        const password = shuffle(shuffleMax(charLength, passLists)).join('');
        return password;
};


