"use client";

import { useDevice } from "@/hooks/utils";

import { FileType } from "@/interface/ui/forms-ui";
import { IconT, Doc, AddVideo, Image } from "@/components/ui/icons";

type FileInputContentLabelT = {
  inputType: FileType;
};

const contentLabelConfigByType: Record<
  FileType,
  {
    Icon: React.FC<IconT>;
    messageText: { large: string; short: string };
    buttonText: string;
  }
> = {
  pdf: {
    Icon: Doc,
    messageText: {
      large: "გთხოვთ აირჩიოთ PDF ფაილი ან ჩააგდეთ აქ",
      short: "გთხოვთ აირჩიოთ PDF ფაილი",
    },
    buttonText: "აირჩიე ფაილი",
  },
  image: {
    Icon: Image,
    messageText: {
      large: "გთხოვთ აირჩიოთ ფოტო ან ჩააგდეთ აქ",
      short: "გთხოვთ აირჩიოთ ფოტო",
    },
    buttonText: "აირჩიე ფაილი",
  },
  video: {
    Icon: AddVideo,
    messageText: {
      large: "გთხოვთ აირჩიოთ Video ფაილი ან ჩააგდეთ აქ",
      short: "გთხოვთ აირჩიოთ Video ფაილი",
    },
    buttonText: "აირჩიე ფაილი",
  },
};

const FileInputContentLabel: React.FC<FileInputContentLabelT> = (props) => {
  const { inputType } = props;

  const configToShow = contentLabelConfigByType[inputType];

  const device = useDevice();

  return (
    <>
      <configToShow.Icon className="text-dark-grey-dark text-4xl laptop:text-[45px]" />

      <span className="text-xs laptop:text-sm">
        {device === "mobile"
          ? configToShow.messageText.short
          : configToShow.messageText.large}
      </span>

      <label className="ml-auto text-blue border border-blue px-2 laptop:px-4 py-2 laptop:py-3 rounded-md text-xs laptop:text-sm cursor-pointer">
        {configToShow.buttonText}
      </label>
    </>
  );
};

export default FileInputContentLabel;
