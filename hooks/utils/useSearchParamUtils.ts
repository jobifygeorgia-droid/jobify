import { useCallback, useMemo } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

/**
 * A React hook that simplifies reading, updating, and navigating with URL query parameters
 * in a Next.js App Router environment.
 *
 * This hook exposes a mutable URLSearchParams working copy derived from Next.js'
 * read-only search params. You can merge or delete parameters locally and push the
 * updated URL when ready.
 *
 * Requirements:
 * - Must be used in a Client Component ("use client").
 * - Relies on next/navigation (App Router).
 *
 * Behavior:
 * - `searchParams` is a mutable clone of Next.js search params that updates when the source changes.
 * - `merge*` helpers parse the provided string via `URLSearchParams` and set/overwrite keys on the working copy.
 * - `delete*` helpers remove keys from the working copy.
 * - `navigate` pushes `${pathname}?${searchParams.toString()}`. Default `scroll` is `false`.
 * - No URL change occurs until a `*Navigate` helper or `navigate` is called.
 *
 * Returned API:
 * - `searchParams: URLSearchParams`
 *   Mutable working copy of the current query parameters.
 *
 * - `mergeParams(targetPath: string): void`
 *   Merges query pairs from `targetPath` into `searchParams`. Overwrites existing keys.
 *   Accepts strings compatible with `URLSearchParams` (e.g., "a=1&b=2" or "?a=1").
 *
 * - `mergeAndNavigate(targetPath: string, scroll?: boolean): void`
 *   Calls `mergeParams(targetPath)` then `navigate(scroll)`.
 *
 * - `deleteParams(params: string[]): void`
 *   Deletes each provided key from `searchParams`.
 *
 * - `deleteAndNavigate(params: string[]): void`
 *   Calls `deleteParams(params)` then `navigate()`.
 *
 * - `deleteMergeAndNavigate(options: { delete: string[]; merge: string; scroll?: boolean }): void`
 *   Deletes keys, merges new pairs, then navigates. Order of operations: delete -> merge -> navigate.
 *
 * - `navigate(scroll?: boolean): void`
 *   Pushes the current pathname with the updated query string. Defaults to `scroll = false`.
 *
 * - `router`
 *   The Next.js App Router instance from `next/navigation`.
 *
 * - `pathname: string`
 *   The current route pathname from `next/navigation`.
 *
 * Caveats:
 * - `URLSearchParams.set` overwrites existing values for a key. If you need multiple values per key,
 *   you may need a different strategy (e.g., custom encoding or using `append` in a custom helper).
 * - `targetPath` must be a format accepted by `URLSearchParams` (e.g., "k=v&x=y" or "?k=v").
 */
export default function useSearchParamUtils() {
  const router = useRouter();
  const pathname = usePathname();
  const nextParams = useSearchParams();

  const searchParams = useMemo(
    () => new URLSearchParams(nextParams),
    [nextParams]
  );

  const mergeParams = useCallback(
    (targetPath: string) => {
      const targetParams = new URLSearchParams(targetPath);

      for (const [key, value] of targetParams.entries()) {
        searchParams.set(key, value);
      }
    },
    [searchParams]
  );

  const navigate = useCallback(
    (scroll = false) => {
      router.push(`${pathname}?${searchParams.toString()}`, { scroll });
    },
    [searchParams, pathname, router]
  );

  const mergeAndNavigate = useCallback(
    (targetPath: string, scroll = false) => {
      mergeParams(targetPath);
      navigate(scroll);
    },
    [mergeParams, navigate]
  );

  const deleteParams = useCallback(
    (params: Array<string>) => {
      params.forEach((param) => searchParams.delete(param));
    },
    [searchParams]
  );

  const deleteAndNavigate = useCallback(
    (params: Array<string>) => {
      deleteParams(params);
      navigate();
    },
    [deleteParams, navigate]
  );

  const deleteMergeAndNavigate = useCallback(
    (params: { delete: Array<string>; merge: string; scroll?: boolean }) => {
      deleteParams(params.delete);
      mergeParams(params.merge);
      navigate(params.scroll);
    },
    [deleteParams, mergeParams, navigate]
  );

  return {
    mergeParams,
    mergeAndNavigate,
    deleteParams,
    deleteAndNavigate,
    navigate,
    searchParams,
    deleteMergeAndNavigate,
    router,
    pathname,
  };
}
