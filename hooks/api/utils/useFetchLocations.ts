"use client";

import { useCallback, useEffect, useState } from "react";

import { LocationT } from "@/interface/global.types";

/**
 * hook that fetches location suggestions from the Google Places Text Search API
 * for a given query and returns a deduplicated list along with a loading state.
 *
 * Features:
 * - Debounces outbound requests by 500 ms to reduce API calls.
 * - Skips querying until the input has at least 3 characters.
 * - Deduplicates suggestions by their formatted address.
 * - Cancels the pending debounce on unmount or when the search term changes.
 *
 * Requirements:
 * - The Google Maps JavaScript API with the Places library must be loaded and available at `window.google.maps.places`.
 *
 * @param search - Free-text query used to search for locations. If fewer than 3 characters, no request is made and the previous results are preserved.
 *
 * @returns An object containing:
 * - `options`: Array of suggestions where each item has:
 *   - `lat`: number — Latitude of the place.
 *   - `lon`: number — Longitude of the place.
 *   - `location`: string — Place name.
 *   - `location_name`: string — Formatted address (used for deduplication).
 * - `loading`: boolean — Whether a request is currently in flight.
 *
 * @remarks
 * - If `window.google?.maps?.places` is unavailable, the hook resolves to an empty list.
 * - Internally uses `google.maps.places.PlacesService#textSearch` with fields: `name`, `geometry`, and `formatted_address`.
 *
 */
export default function useFetchLocations(search: string) {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<LocationT[]>([]);

  const getLocationsQuery = useCallback(async (query: string) => {
    if (!window.google?.maps?.places) return [];

    return new Promise<LocationT[]>((resolve) => {
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );

      const request = {
        query,
        fields: ["name", "geometry", "formatted_address"],
      };

      service.textSearch(request, (results, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK || !results)
          return resolve([]);

        const formatted = results.map((place) => ({
          lat: place.geometry?.location?.lat() ?? 0,
          lon: place.geometry?.location?.lng() ?? 0,
          location: place.name ?? "",
          location_name: place.formatted_address ?? "",
        }));

        // Deduplicate by display name
        const unique = Array.from(
          new Map(formatted.map((item) => [item.location_name, item])).values()
        );

        resolve(unique);
      });
    });
  }, []);

  useEffect(() => {
    if (search.length < 3) return;

    const timeoutId = setTimeout(async () => {
      setLoading(true);

      const data = await getLocationsQuery(search);
      setOptions(data);

      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search, getLocationsQuery]);

  return { options, loading };
}
