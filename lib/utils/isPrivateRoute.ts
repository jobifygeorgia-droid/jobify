import { PRIVATE_ROUTES } from "@/lib/config"; // wherever your ALL_ROUTES is

/**
 * Checks if a given URL matches any private route
 * @param url - the current user URL (can include query string)
 * @returns true if the URL is private, false otherwise
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
