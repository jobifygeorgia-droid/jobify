import { useEffect, useState } from "react";

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
