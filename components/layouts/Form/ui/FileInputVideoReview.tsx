import { useGenerateUrlsFromFiles } from "@/hooks/utils";

import { FileInputReviewComponentPropsT } from "@/components/layouts/Form/types/form-fields.types";
import FileInputReviewRemoveFileButton from "./FileInputReviewRemoveFileButton";

const FileInputVideoReview: React.FC<FileInputReviewComponentPropsT> = (
  props
) => {
  const { files, removeFile } = props;

  const { urls } = useGenerateUrlsFromFiles(files);

  return (
    <div className="flex items-center gap-1 flex-wrap border border-bc p-2 rounded-lg">
      {urls.map((url, index) => (
        <div
          key={`video-review-${index + 1}`}
          className="group w-[150px] aspect-video relative rounded-md overflow-hidden border border-bc bg-black flex items-center justify-center"
        >
          <video src={url} controls className="w-full h-full object-contain" />

          <FileInputReviewRemoveFileButton
            onRemove={() => removeFile(files[index])}
          />
        </div>
      ))}
    </div>
  );
};

export default FileInputVideoReview;
