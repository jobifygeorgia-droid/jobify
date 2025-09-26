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
      className="cursor-pointer flex items-center"
      onClick={() =>
        setInputType((prev) => (prev === "text" ? "password" : "text"))
      }
    >
      {inputType === "password" ? (
        <Eye className="text-light-grey-dark" />
      ) : (
        <EyeOff className="text-light-grey-dark" />
      )}
    </button>
  );
};

export default PasswordFieldAdornment;
