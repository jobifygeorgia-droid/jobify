type AsideT = {
  children: React.ReactNode;
};

const Aside: React.FC<AsideT> = ({ children }) => {
  return <aside className="flex-1 w-full">{children}</aside>;
};

export default Aside;
