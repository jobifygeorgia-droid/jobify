import {
  FileType,
  FileInputReviewComponentPropsT,
} from "@/components/layouts/Form/types/form-fields.types";

import FileInputPdfReview from "./FileInputPdfReview";
import FileInputImageReview from "./FileInputImageReview";
import FileInputVideoReview from "./FileInputVideoReview";

const ReviewComponents: Record<
  FileType,
  React.FC<FileInputReviewComponentPropsT>
> = {
  pdf: FileInputPdfReview,
  image: FileInputImageReview,
  video: FileInputVideoReview,
};

type FileInputReviewT = {
  files: File[];
  inputType: FileType;
  removeFile: (file: File) => void;
};

const FileInputReview: React.FC<FileInputReviewT> = (props) => {
  const { files, removeFile, inputType } = props;

  const ReviewComponent = ReviewComponents[inputType];

  return <ReviewComponent files={files} removeFile={removeFile} />;
};

export default FileInputReview;
