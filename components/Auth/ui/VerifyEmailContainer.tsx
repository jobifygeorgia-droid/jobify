type VerifyEmailContainerT = {
  children: React.ReactNode;
};

const VerifyEmailContainer: React.FC<VerifyEmailContainerT> = ({
  children,
}) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-12">
      {children}{" "}
    </div>
  );
};

export default VerifyEmailContainer;
