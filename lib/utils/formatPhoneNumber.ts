/**
 * Formats a phone string into a Georgian-style number with the +995 country code and spaced groups.
 *
 * Behavior:
 * - Removes all spaces from the input.
 * - Ensures the number starts with "+995". If it does not, prefixes "+995" and strips a single leading "0" from the local part.
 * - Groups the result into chunks: "+995", then 3-3-3 digits (missing digits are omitted for partial inputs).
 *
 * @remarks
 * - This is a formatting helper; it does not validate number length or content beyond removing spaces.
 * - Characters other than spaces are not removed and may lead to unexpected output if present.
 *
 * @param phone - Raw phone input (may contain spaces, may start with 0, or already include +995).
 *
 * @returns A formatted phone number such as "+995 555 123 456", or a partial grouping if input is incomplete.
 */
export default function formatPhoneNumber(phone: string) {
  let num = phone.replace(/\s+/g, ""); // Remove spaces

  if (!num.startsWith("+995")) num = "+995" + num.replace(/^0/, "");

  // Extract parts
  const part1 = num.slice(0, 4);
  const part2 = num.slice(4, 7);
  const part3 = num.slice(7, 10);
  const part4 = num.slice(10, 13);

  const phoneNumber = [part1, part2, part3, part4].filter(Boolean).join(" ");

  return phoneNumber;
}
