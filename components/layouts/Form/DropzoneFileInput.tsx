"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import classnames from "classnames";

import FileInputReview from "./ui/FileInputReview";
import { fileInputAcceptMap, FileType } from "./types/form-fields.types";
import FileInputContentLabel from "./ui/FileInputContentLabel";

type DropzoneFileInputT = {
  type: FileType;
  multiple?: boolean;
};

const DropzoneFileInput: React.FC<DropzoneFileInputT> = (props) => {
  const { type, multiple = false } = props;

  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    accept: fileInputAcceptMap[type],
  });

  const removeFile = (file: File) => {
    setFiles((prev) => prev.filter((f) => f !== file));
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        {...getRootProps()}
        className={classnames(
          "border border-dashed border-bc p-4 rounded-lg flex items-center gap-6 cursor-pointer",
          { "border-green": isDragActive }
        )}
      >
        <FileInputContentLabel inputType={type} />

        <input {...getInputProps()} />
      </div>

      {files.length > 0 && (
        <FileInputReview
          files={files}
          removeFile={removeFile}
          inputType={type}
        />
      )}
    </div>
  );
};

export default DropzoneFileInput;
