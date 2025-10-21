"use client";

import { useState, useEffect } from "react";

import { publicApiClient } from "@/services/axios/axios-client";
import { CategoryT } from "@/interface/db/categories";
import { logger } from "@/lib/utils";

/**
 * @see
 * - {@link CategoryT}
 *
 * React hook that fetches category data from the public API and exposes it as
 * a list of normalized option objects along with a loading indicator.
 *
 * On initial mount, this hook performs a GET request to "/categories/" using
 * `publicApiClient`. If the response contains a `results` array, each category
 * is mapped to an option object with the shape `{ value, label }`, where
 * `value` is the category ID and `label` is the category name.
 *
 * Any errors that occur during the fetch are caught and logged via `logger`.
 * The `loading` state reflects the lifecycle of the request and is reset in
 * a `finally` block to ensure consistency.
 *
 * @returns An object with:
 * - `options`: An array of option items derived from categories,
 *   shaped as `{ value: string | number; label: string }`.
 * - `loading`: A boolean indicating whether the categories are being loaded.
 *
 * @remarks The fetch is triggered once on mount via `useEffect` with an empty dependency array.
 */
export default function useFetchCategories() {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCategories() {
    try {
      setLoading(true);

      const { data } = await publicApiClient.get(`/categories/`);

      if (data?.results)
        setOptions(() =>
          data.results.map((category: CategoryT) => ({
            value: category.id,
            label: category.name,
          }))
        );
    } catch (error: any) {
      logger(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return { options, loading };
}
