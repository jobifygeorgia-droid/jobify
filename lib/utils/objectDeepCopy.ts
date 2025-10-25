/**
 * Creates a deep copy of a JSON-serializable object by serializing and deserializing it.
 *
 * @typeParam T - The object type to copy.
 * @param object - The source object to deep copy.
 * @returns A new object with the same JSON-serializable structure and values as the input.
 *
 * @remarks
 * - Only JSON-serializable values are preserved.
 *   - Functions, symbols, undefined, bigint, Map, Set, RegExp, Error, TypedArrays, and class instances are not preserved.
 *   - Date objects become ISO strings; prototypes and non-enumerable properties are lost.
 * - Circular references will cause a runtime error.
 * - Intended for plain data objects where fidelity to complex types is not required.
 *
 * @throws {TypeError} If the input contains circular references or non-serializable values that `JSON.stringify` cannot handle.
 */
const objectDeepCopy = <T extends object>(object: T): T => {
  return JSON.parse(JSON.stringify(object));
};
export default objectDeepCopy;
