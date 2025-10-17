type EmptyMessageT = {
  message: string;
};

const EmptyMessage: React.FC<EmptyMessageT> = ({ message }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="font-semibold text-light-grey-dark text-base-sm tracking-wider">
        {message}
      </p>
    </div>
  );
};

export default EmptyMessage;
