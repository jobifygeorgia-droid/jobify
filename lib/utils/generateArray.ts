/**
 * Creates a new array of the specified length filled with sequential integers
 * starting at 0 and ending at length - 1.
 *
 * @param length - The desired number of elements. Must be a non-negative, finite integer less than 2^32.
 * @returns An array of ascending integers: [0, 1, 2, ..., length - 1].
 *
 * @throws RangeError If `length` is negative, not an integer, not finite, or exceeds the maximum array length.
 *
 * @remarks
 * Useful for generating index ranges for iteration, rendering lists, or placeholder data.
 */
export default function generateArray(length: number): Array<number> {
  return Array.from(new Array(length)).map((_, index) => index);
}
