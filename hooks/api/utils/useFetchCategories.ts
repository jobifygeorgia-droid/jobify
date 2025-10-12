"use client";

import { useState, useEffect } from "react";

import { publicApiClient } from "@/services/axios/axios-client";
import { CategoryT } from "@/interface/db/categories";
import { logger } from "@/lib/utils";

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
