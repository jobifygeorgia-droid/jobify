"use client";

import { useCallback, useEffect, useState } from "react";

import { logger } from "@/lib/utils";
import { LocationT } from "@/interface/global.types";
import { allowedAddressTypes } from "@/lib/constants";

/**
 * @see
 * - {@link LocationT}
 * - {@link allowedAddressTypes}
 *
 * React hook that searches, filters, and normalizes geocoded location candidates from
 * OpenStreetMap as a user types a query.
 *
 * Debounces outbound requests by 500 ms and ignores queries shorter than 3 characters.
 * Results are filtered by a permitted set of address types and deduplicated by their
 * display name before being exposed to consumers.
 *
 * @param search - Free-text query used to request geocoding suggestions. Requests are made only when the length is at least 3 characters.
 *
 * @returns An object containing:
 * - options: A list of unique LocationT entries normalized to include latitude, longitude, a short name, and a display name.
 * - loading: A boolean indicating the in-flight status of the most recent request.
 *
 * @remarks
 * - Uses leaflet-geosearch's OpenStreetMapProvider via dynamic import to reduce initial bundle size.
 * - Filtering depends on an external allowedAddressTypes list and provider-specific raw fields.
 * - Errors are logged and yield an empty result set; the hook does not throw.
 * - Pending debounced requests are canceled on changes to the search term or on unmount.
 * - Must be invoked from within a React component or another hook.
 */
export default function useFetchLocations(search: string) {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<LocationT[]>([]);

  function normalizeLocations(data: Array<any>): Array<LocationT> {
    const filteredData = data
      .filter((item: any) => allowedAddressTypes.includes(item.raw.addresstype))
      .map((item: any) => ({
        lat: item.y,
        lon: item.x,
        location: item.raw.name!,
        location_name: item.raw.display_name,
      }));

    const uniqueLocations = Array.from(
      new Map(
        filteredData.map((item: any) => [item.location_name, item])
      ).values()
    );

    return uniqueLocations;
  }

  const getLocationsQuery = useCallback(async (query: string) => {
    try {
      setLoading(true);

      const { OpenStreetMapProvider } = await import("leaflet-geosearch");
      const provider = new OpenStreetMapProvider();

      const candidateAddresses = (await provider.search({
        query: query.toLocaleLowerCase(),
      })) as any;

      return normalizeLocations(candidateAddresses);
    } catch (error: any) {
      logger(error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (search.length < 3) return;

    const timeOutId = setTimeout(async () => {
      if (!search) return;

      const data = await getLocationsQuery(search);

      if (data.length > 0) setOptions(() => data);
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [search, getLocationsQuery]);

  return { options, loading };
}
