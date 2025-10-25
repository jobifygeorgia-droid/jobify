type AdornmentWrapperT = {
  children?: React.ReactNode;
};

const AdornmentWrapper: React.FC<AdornmentWrapperT> = ({ children }) => {
  return (
    <div className="h-10 size-[30px] flex items-center justify-center bg-white">
      {children}
    </div>
  );
};

export default AdornmentWrapper;
