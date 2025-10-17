type BurgerMenuContainerT = {
  children: React.ReactNode;
};

const BurgerMenuContainer: React.FC<BurgerMenuContainerT> = ({ children }) => {
  return (
    <div className="laptop:hidden scroll-block fixed z-[999] inset-0 flex justify-end">
      <div className="h-screen w-[320px] bg-white border-l border-l-bc flex flex-col py-4 pt-12 px-2 gap-3 text-base-sm">
        {children}
      </div>
    </div>
  );
};

export default BurgerMenuContainer;
