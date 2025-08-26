import { Close } from "@/components/ui/icons";

type FileInputReviewRemoveFileButtonT = {
  onRemove: () => void;
};

const FileInputReviewRemoveFileButton: React.FC<
  FileInputReviewRemoveFileButtonT
> = ({ onRemove }) => {
  return (
    <button
      onClick={onRemove}
      className="absolute top-1 right-1 cursor-pointer size-[24px] rounded-full flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    >
      <Close width={7} height={7} className="fill-dark-grey-dark" />
    </button>
  );
};

export default FileInputReviewRemoveFileButton;
