import { Close } from "@/components/ui/icons";
import { FileInputReviewComponentPropsT } from "@/interface/ui/forms-ui";

const FileInputPdfReview: React.FC<FileInputReviewComponentPropsT> = (
  props
) => {
  const { files, removeFile } = props;

  return (
    <div className="flex items-center gap-2 flex-wrap border border-bc p-2 rounded-lg">
      {files.map((file) => (
        <div
          key={file.name}
          className="flex justify-between items-center gap-4 py-1 px-3 mb-1 rounded-md border border-bc"
        >
          <span>{file.name}</span>
          <button
            onClick={() => removeFile(file)}
            className="cursor-pointer flex items-center"
          >
            <Close size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FileInputPdfReview;
