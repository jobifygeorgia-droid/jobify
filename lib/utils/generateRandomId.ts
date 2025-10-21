/**
 * Generates a pseudo-random alphanumeric identifier of the specified length.
 *
 * The identifier is composed of uppercase letters (A–Z), lowercase letters (a–z),
 * and digits (0–9). Randomness is sourced from `Math.random()` and is therefore
 * not cryptographically secure.
 *
 * @param length - Desired length of the identifier. Defaults to `16`.
 *
 * @returns A string containing `length` alphanumeric characters.
 *
 * @remarks
 * Do not use this function for security-sensitive tokens, passwords, or keys.
 */
export default function generateRandomId(length = 16): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}
