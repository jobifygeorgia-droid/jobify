import { Success } from "./icons";

type SuccessPopupWindowT = {
  message?: string;
  children?: React.ReactNode;
};

const SuccessPopupWindow: React.FC<SuccessPopupWindowT> = ({
  message,
  children,
}) => {
  return (
    <div className="flex flex-col items-center gap-10 py-11 w-full">
      <Success />
      {message && <span className="font-medium text-md">{message}</span>}
      {children}
    </div>
  );
};

export default SuccessPopupWindow;
