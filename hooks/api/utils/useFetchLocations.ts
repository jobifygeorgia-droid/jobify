"use client";

import { useCallback, useEffect, useState } from "react";

import { logger } from "@/lib/utils";
import { LocationT } from "@/interface/global.types";
import { allowedAddressTypes } from "@/lib/constants";

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
