import { Eye, EyeOff } from "@/components/ui/icons";

type PasswordFieldAdornmentT = {
  inputType: "password" | "text";
  setInputType: React.Dispatch<React.SetStateAction<"password" | "text">>;
};

const PasswordFieldAdornment: React.FC<PasswordFieldAdornmentT> = ({
  inputType,
  setInputType,
}) => {
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={() =>
        setInputType((prev) => (prev === "text" ? "password" : "text"))
      }
    >
      {inputType === "password" ? (
        <Eye className="fill-dark-grey-active" />
      ) : (
        <EyeOff className="fill-dark-grey-active" />
      )}
    </button>
  );
};

export default PasswordFieldAdornment;
