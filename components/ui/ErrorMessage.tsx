type ErrorMessageT = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageT> = ({ message }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="font-semibold text-red text-base-sm tracking-wider">
        {message}
      </p>
    </div>
  );
};

export default ErrorMessage;
