import { PageParamsT } from "@/interface/global.types";

/**
 * @see
 * - {@link PageParamsT}
 *
 * Creates a URL-encoded query string from a Next.js `searchParams`-like object.
 *
 * The function:
 * - Includes only entries whose values are of type `string` (arrays, numbers, booleans, objects are ignored).
 * - Excludes `undefined` values; empty strings (`""`) are included.
 * - Optionally restricts serialization to a provided allow-list of keys.
 * - Returns the query string without a leading "?" (e.g., "a=1&b=2"), or an empty string if nothing qualifies.
 *
 * @param query - A map of query parameter keys to values (e.g., Next.js `searchParams`). `null`/`undefined` is treated as empty.
 * @param keysToInclude - Optional list of keys to include. When provided, only these keys with string values are serialized.
 *
 * @returns The percent-encoded query string without the leading "?".
 *
 * @remarks
 * - Values are percent-encoded using `URLSearchParams`.
 * - Output ordering follows the original object’s key enumeration order after filtering.
 */
export default function buildQueryStringFromNextSearchParams(
  query: Awaited<PageParamsT["searchParams"]>,
  keysToInclude?: string[]
) {
  const haveKeysToInclude =
    Array.isArray(keysToInclude) && keysToInclude.length > 0;

  const filteredQuery = haveKeysToInclude
    ? Object.fromEntries(
        Object.entries(query || {}).filter(
          ([k, v]) =>
            keysToInclude.includes(k) &&
            typeof v === "string" &&
            v !== undefined
        )
      )
    : Object.fromEntries(
        Object.entries(query || {}).filter(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_, v]) => typeof v === "string" && v !== undefined
        )
      );

  const queryString = new URLSearchParams(
    filteredQuery as Record<string, string>
  ).toString();

  return queryString;
}
