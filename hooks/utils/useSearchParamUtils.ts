import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

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
