import { Success } from "./icons";

type SuccessPopupWindowT = {
  message?: string;
};

const SuccessPopupWindow: React.FC<SuccessPopupWindowT> = ({ message }) => {
  return (
    <div className="flex flex-col items-center gap-10 py-11 w-full">
      <Success />
      {message && <span className="font-medium text-md">{message}</span>}
    </div>
  );
};

export default SuccessPopupWindow;
