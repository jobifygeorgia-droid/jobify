import { PageParamsT } from "@/interface/global.types";

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
          ([_, v]) => typeof v === "string" && v !== undefined
        )
      );

  const queryString = new URLSearchParams(
    filteredQuery as Record<string, string>
  ).toString();

  return queryString;
}
