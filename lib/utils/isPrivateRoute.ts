import { PRIVATE_ROUTES } from "@/lib/config";

/**
 * @see
 * - {@link PRIVATE_ROUTES}
 *
 * Checks whether a given URL/path matches any of the configured private route patterns in `PRIVATE_ROUTES`.
 *
 * The check converts each route's `path` pattern into a regular expression:
 * - Dynamic segments like `:param` match any single path segment (i.e., `[^/]+`).
 * - `?` in the pattern is treated literally (escaped) to support query-string patterns.
 * - `=` is preserved to allow matching exact query key/value pairs.
 * - The match is anchored (`^...$`) to require a full-string match.
 *
 * Note:
 * Matching is case-sensitive and does not perform URL normalization. If your
 * `PRIVATE_ROUTES` use pathnames (e.g., `/account`), pass a pathname (optionally with a query),
 * not a full URL with protocol/host.
 *
 * @param url - The pathname (optionally including a query string) to test, e.g., `/users/42?tab=profile`.
 * @returns `true` if the URL matches a private route pattern; otherwise, `false`.
 *
 * @remarks
 * - Complexity is O(N) relative to the number of entries in `PRIVATE_ROUTES`.
 * - Dynamic segments do not span slashes; they only match within a single path segment.
 * - Query-string matching is literal; keys and values must match exactly as expressed in the pattern.
 *
 */
export default function isPrivateRoute(url: string): boolean {
  return PRIVATE_ROUTES.some((route) => {
    const pathRegex = route.path
      .replace(/:[^/]+/g, "[^/]+") // replace :param with regex
      .replace(/\?/g, "\\?") // escape "?" in query strings
      .replace(/=/g, "="); // keep "=" for query strings

    const regex = new RegExp(`^${pathRegex}$`);
    return regex.test(url);
  });
}
