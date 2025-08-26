import { IconPropsT, Doc, ImageIcon, VideoIcon } from "@/components/ui/icons";
import { FileType } from "../types/form-fields.types";

type FileInputContentLabelT = {
  inputType: FileType;
};

const contentLabelConfigByType: Record<
  FileType,
  {
    Icon: React.FC<IconPropsT>;
    messageText: string;
    buttonText: string;
  }
> = {
  pdf: {
    Icon: Doc,
    messageText: "გთხოვთ აირჩიოთ PDF ფაილი ან ჩააგდეთ აქ",
    buttonText: "აირჩიე ფაილი",
  },
  image: {
    Icon: ImageIcon,
    messageText: "გთხოვთ აირჩიოთ ფოტო ან ჩააგდეთ აქ",
    buttonText: "აირჩიე ფაილი",
  },
  video: {
    Icon: VideoIcon,
    messageText: "გთხოვთ აირჩიოთ Video ფაილი ან ჩააგდეთ აქ",
    buttonText: "აირჩიე ფაილი",
  },
};

const FileInputContentLabel: React.FC<FileInputContentLabelT> = (props) => {
  const { inputType } = props;

  const configToShow = contentLabelConfigByType[inputType];

  return (
    <>
      <configToShow.Icon
        className="fill-blue stroke-blue"
        width={35}
        height={35}
      />

      <span className="text-sm">{configToShow.messageText}</span>

      <label className="ml-auto text-blue border border-blue px-4 py-3 rounded-md text-sm">
        {configToShow.buttonText}
      </label>
    </>
  );
};

export default FileInputContentLabel;
