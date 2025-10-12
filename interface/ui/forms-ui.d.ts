import { MultiValue, SingleValue } from "react-select";
import { ChipT } from "./ui";

// TextField
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
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldWrapperClassName?: React.ComponentProps<"div">["className"];
  containerClassName?: React.ComponentProps<"div">["className"];
  htmlInputProps?: Omit<
    React.ComponentProps<"input">,
    "onChange" | "value" | "type" | "name" | "id" | "placeholder"
  >;
};

export type TextFieldPropsT = TextFieldBaseProps &
  (TextFieldWithLabelPropsT | TextFieldWithPlaceholderPropsT);

// Select
export type SelectOptionT = { label: string; value: string };

export type SelectValueT =
  | SingleValue<SelectOptionT>
  | MultiValue<SelectOptionT>
  | null;

export type SelectT = {
  id: string;
  instanceId: string;
  values: Array<string | number>;
  options: Array<SelectOptionT>;
  onChange: (value: SelectValueT) => void;
  message?: string;
  loading?: boolean;
  isMulti?: boolean;
  label?: string;
  placeholder?: string;
  dropdownPlaceholder?: string;
  width?: string;
  containerClassName?: string;
  variant?: "filled" | "outlined";
  adornment?: React.ReactNode;
  itemsToShowCount?: number;
};

// TextInput
export type CategoriesFieldT = {
  message?: string;
  value: Array<number>;
  onChange: (value: SelectValueT) => void;
};

// Checkbox
export type CheckboxT = {
  id?: string;
  name?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  checked?: boolean;
  onCheck?: () => void;
};

// ChipsField
export type ChipsFieldT = {
  value: string;
  label?: string;
  isRequired?: boolean;
  labelClassname?: string;
  message?: string;
  onChange: (value: string) => void;
  data: Array<{ label: string; value: string }>;
  chipOptions?: Partial<Omit<ChipT, "isActive" | "onClick">>;
};

// DatePicker
export type DatePickerT = {
  disablePortal?: boolean;
  placement?: "top-start" | "bottom-end";
  label?: string;
  message?: string;
  value?: string;
  className?: string;
  onChange?: (v: string) => void;
};

// DropzoneFileInput
export type FileType = "image" | "video" | "pdf";

export type FileInputAcceptMapT = Record<FileType, Record<string, string[]>>;

export type FileInputReviewComponentPropsT = {
  files: File[];
  removeFile: (file: File) => void;
};

export type DropzoneFileInputT = {
  type: FileType;
  multiple?: boolean;
};

// Location
export type LocationFieldT = {
  value: string;
  textFieldProps: Omit<
    TextFieldPropsT,
    | "label"
    | "labelPosition"
    | "containerClassName"
    | "placeholder"
    | "onChange"
    | "value"
  >;
  onChange: (value: LocationT) => void;
};

// OTP
export type OTPT = {
  label?: string;
  numInputs?: number;
  name?: string;
  value?: string;
  onChange: () => void;
  message?: string;
};

// PasswordField
export type PasswordFieldT = {
  message?: string;
  inputProps: Exclude<TextFieldPropsT, "message" | "inputType" | "adornment">;
};

// Radio
export type RadioOptionT = {
  value: string | number;
  label: string;
  id?: string;
};

export type RadioT = {
  name: string;
  message?: string;
  value?: string | number;
  size?: "small" | "medium";
  direction?: "column" | "row";
  data: Array<RadioOptionT>;
  onChange?: (value: RadioOptionT["value"]) => void;
};

// RangeField
export type RangeFieldT = {
  max?: number;
  min?: number;
  step?: number;
};

// Switch
export type SwitchT = {
  label?: string;
  value: boolean;
  onChange?: (v: boolean) => void;
  type?: "primary" | "secondary";
};
