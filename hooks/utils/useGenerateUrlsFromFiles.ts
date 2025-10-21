import { useEffect, useState } from "react";

/**
 * Generates and manages object URLs for a given array of File objects.
 *
 * This React hook creates `blob:` URLs via `URL.createObjectURL` for each file and
 * exposes them as a stable array. When the component unmounts or the `files` input
 * changes, previously created URLs are revoked with `URL.revokeObjectURL` to prevent
 * memory leaks.
 *
 * @param files - Array of File instances (e.g., from an `<input type="file" />` or drag-and-drop).
 * @returns An object containing:
 * - `urls`: A string array of object URLs corresponding to the provided files, preserving order.
 *
 * @remarks
 * - The URLs are recreated whenever the `files` array reference changes.
 * - Do not persist these URLs outside the component lifecycle; they are revoked on cleanup.
 * - For large files or frequent updates, consider debouncing updates to reduce churn.
 */
export default function useGenerateUrlsFromFiles(files: File[]) {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const objectUrls = files.map((file) => URL.createObjectURL(file));

    setUrls(objectUrls);

    return () => {
      // cleanup memory when component unmounts or files change
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  return { urls };
}
