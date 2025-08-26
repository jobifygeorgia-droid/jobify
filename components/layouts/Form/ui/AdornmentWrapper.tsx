type AdornmentWrapperT = {
  children?: React.ReactNode;
};

const AdornmentWrapper: React.FC<AdornmentWrapperT> = ({ children }) => {
  return (
    <div className="h-10 size-[30px] flex items-center justify-center absolute bottom-[2px] right-1 bg-white">
      {children}
    </div>
  );
};

export default AdornmentWrapper;
