type AsideT = {
  children: React.ReactNode;
};

const Aside: React.FC<AsideT> = ({ children }) => {
  return (
    <aside className="flex-1 laptop:sticky top-24 w-full flex flex-col gap-6">
      {children}
    </aside>
  );
};

export default Aside;
