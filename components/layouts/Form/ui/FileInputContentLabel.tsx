import { FileType } from "../types/form-fields.types";
import { IconT, Doc, Video, Image } from "@/components/ui/icons";

type FileInputContentLabelT = {
  inputType: FileType;
};

const contentLabelConfigByType: Record<
  FileType,
  {
    Icon: React.FC<IconT>;
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
    Icon: Image,
    messageText: "გთხოვთ აირჩიოთ ფოტო ან ჩააგდეთ აქ",
    buttonText: "აირჩიე ფაილი",
  },
  video: {
    Icon: Video,
    messageText: "გთხოვთ აირჩიოთ Video ფაილი ან ჩააგდეთ აქ",
    buttonText: "აირჩიე ფაილი",
  },
};

const FileInputContentLabel: React.FC<FileInputContentLabelT> = (props) => {
  const { inputType } = props;

  const configToShow = contentLabelConfigByType[inputType];

  return (
    <>
      <configToShow.Icon className="text-blue" size={45} />

      <span className="text-sm">{configToShow.messageText}</span>

      <label className="ml-auto text-blue border border-blue px-4 py-3 rounded-md text-sm">
        {configToShow.buttonText}
      </label>
    </>
  );
};

export default FileInputContentLabel;
