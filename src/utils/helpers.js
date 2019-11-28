/**
 * Replaces all instances of the tokens in a string with the corresponding
 * values
 *
 * @export
 * @param {string} stringToReplace
 * @param {object} tokensToReplace
 * @return {string} The string after the tokens were replaced
 */
export function replaceTokens(stringToReplace, tokensToReplace) {
  let stringAfterReplace = stringToReplace

  for (let token in tokensToReplace) {
    let re = new RegExp(token, "g")
    stringAfterReplace = stringAfterReplace.replace(re, tokensToReplace[token])
  }

  return stringAfterReplace
}

/**
 * Returns a random sampled sub-array of an array.
 *
 * If samples exceeds the size of the array, uses the array length instead, the
 * result of which would then be a shuffled version of the original array.
 *
 * @export
 * @param {array} array - Array to sample
 * @param {number} samples - Number of samples to get
 * @return {array} The sampled sub-array
 */
export function getRandomSubArray(array, samples) {
  let shuffled = array.slice(0), // copy of array
    i = array.length,
    tmp,
    index

  if (samples > i) samples = i

  while (i--) {
    index = Math.floor((i + 1) * Math.random())
    tmp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = tmp
  }

  return shuffled.slice(0, samples)
}
