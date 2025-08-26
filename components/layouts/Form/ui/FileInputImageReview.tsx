"use client";

import Image from "next/image";

import { useGenerateUrlsFromFiles } from "@/hooks/utils";

import { FileInputReviewComponentPropsT } from "@/components/layouts/Form/types/form-fields.types";
import FileInputReviewRemoveFileButton from "./FileInputReviewRemoveFileButton";

const FileInputImageReview: React.FC<FileInputReviewComponentPropsT> = (
  props
) => {
  const { files, removeFile } = props;

  const { urls } = useGenerateUrlsFromFiles(files);

  return (
    <div className="flex items-center gap-1 flex-wrap border border-bc p-2 rounded-lg">
      {urls.map((url, index) => (
        <div
          key={`image-review-${index + 1}`}
          className="group relative size-[76px] rounded-md overflow-hidden border border-bc bg-black flex items-center justify-center"
        >
          <Image
            fill
            src={url}
            alt="image to upload"
            className="object-cover"
          />

          <FileInputReviewRemoveFileButton
            onRemove={() => removeFile(files[index])}
          />
        </div>
      ))}
    </div>
  );
};

export default FileInputImageReview;
