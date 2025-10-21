/**
 * Extracts the value of a specific cookie from a response headers collection.
 *
 * @param headers - A headers collection that either:
 *  - Implements a `get(name: string)` method (e.g., Fetch API `Headers`) from which `"set-cookie"` will be read, or
 *  - Exposes a `"set-cookie"` property containing a string or string[] of Set-Cookie header values.
 * @param key - The cookie name to extract.
 * @returns The cookie value (without attributes) if found; otherwise `undefined`.
 *
 * @remarks
 * - Supports multiple Set-Cookie entries and returns the last matching cookie encountered.
 * - Only matches cookie lines that start with `<key>=`, as is standard for Set-Cookie header fields.
 * - Declared `async` for API consistency; it performs no asynchronous operations.
 */
export default async function extractCookieHeader(headers: any, key: string) {
  let headerValue: string[] | string = "";

  if (typeof headers.get === "function")
    headerValue = headers.get("set-cookie") || "";
  else if (headers["set-cookie"]) headerValue = headers["set-cookie"];

  const values = Array.isArray(headerValue) ? headerValue : [headerValue];

  let candidateValue: string | undefined = undefined;

  for (const value of values) {
    if (value.startsWith(`${key}=`))
      candidateValue = value.split(";")[0].split("=")[1];
  }

  return candidateValue;
}
