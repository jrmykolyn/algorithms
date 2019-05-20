/**
 * Given an integer (n) and a sorted array of intergers (arr),
 * return the the position of n in arr.
 *
 * If n is not found, return -1.
 *
 * @param {number} n
 * @param {Array<number>} arr
 */
const iterativeBinarySearch = (n, arr) => {
  let high = arr.length - 1;
  let low = 0;
  let mid;
  let ret = -1;

  while (high >= low) {
    // Update mid value.
    // For cases where high is equal to low, the resulting mid value is 0.
    // To account for this, fallback to high.
    // ie. `(3 - 3) / 2 === 0`, fallback to 3.
    mid = Math.floor((high - low) / 2) || high;

    // Check
    if (arr[mid] === n) ret = mid;

    // Exit
    if (high === low) break;

    // Adjust range
    if (arr[mid] > n) high = mid - 1;
    if (arr[mid] < n) low = mid + 1;
  }

  return ret;
};

const iterativeResult = iterativeBinarySearch(3, [1, 2, 3, 5, 7 , 9, 11]);
console.log(iterativeResult);
