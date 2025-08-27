import { MultiValue, SingleValue } from "react-select";

type TextFieldWithLabelPropsT = {
  label: string;
  labelPosition?: "out" | "in";
  placeholder?: never;
};

type TextFieldWithPlaceholderPropsT = {
  label?: never;
  labelPosition?: never;
  placeholder: string;
};

type TextFieldBaseProps = {
  message?: string;
  inputType?: "text" | "password" | "number";
  variant?: "fill" | "outlined";
  adornment?: React.ReactNode;
  onClick?: () => void;
  value?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldWrapperClassName?: React.ComponentProps<"div">["className"];
};

export type TextFieldPropsT = TextFieldBaseProps &
  (TextFieldWithLabelPropsT | TextFieldWithPlaceholderPropsT);

export type RadioOptionT = {
  value: string | number;
  label: string;
  id?: string;
};

export type RadioPropsT = {
  name: string;
  message?: string;
  value?: string | number;
  size?: "small" | "medium";
  direction?: "column" | "row";
  data: Array<RadioOptionT>;
  onChange?: (value: RadioOptionT["value"]) => void;
};

export type SelectedOptionT<T> = SingleValue<T> | MultiValue<T> | null;

export type FileType = "image" | "video" | "pdf";

export const fileInputAcceptMap: Record<FileType, Record<string, string[]>> = {
  pdf: { "application/pdf": [".pdf"] },
  image: {
    "image/jpeg": [".jpg", ".jpeg"],
    "image/png": [".png"],
    "image/gif": [".gif"],
  },
  video: {
    "video/mp4": [".mp4"],
    "video/quicktime": [".mov"],
    "video/webm": [".webm"],
  },
};

export type FileInputReviewComponentPropsT = {
  files: File[];
  removeFile: (file: File) => void;
};
