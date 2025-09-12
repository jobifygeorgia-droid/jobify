import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function useSearchParamUtils() {
  const router = useRouter();
  const pathname = usePathname();
  const nextParams = useSearchParams();
  const searchParams = new URLSearchParams(nextParams);

  const mergeParams = (targetPath: string) => {
    const targetParams = new URLSearchParams(targetPath);

    for (const [key, value] of targetParams.entries()) {
      searchParams.set(key, value);
    }
  };

  const navigate = (scroll = false) =>
    router.push(`${pathname}?${searchParams.toString()}`, { scroll });

  const mergeAndNavigate = (targetPath: string, scroll = false) => {
    mergeParams(targetPath);
    navigate(scroll);
  };

  const deleteParams = (params: Array<string>) => {
    params.forEach((param) => searchParams.delete(param));
  };

  const deleteMergeAndNavigate = (params: {
    delete: Array<string>;
    merge: string;
    scroll?: boolean;
  }) => {
    deleteParams(params.delete);
    mergeParams(params.merge);
    navigate(params.scroll);
  };

  return {
    mergeParams,
    mergeAndNavigate,
    deleteParams,
    navigate,
    searchParams,
    deleteMergeAndNavigate,
  };
}
