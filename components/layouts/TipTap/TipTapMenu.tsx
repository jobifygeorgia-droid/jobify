import Groups from "./components/MenuGroups/Groups";

type TipTapMenuT = React.FC<{ children: React.ReactNode }> & {
  Groups: typeof Groups;
};

const TipTapMenu: TipTapMenuT = ({ children }) => {
  return (
    <div className="flex flex-col justify-items-center gap-6 flex-wrap">
      {children}
    </div>
  );
};

TipTapMenu.Groups = Groups;

export default TipTapMenu;
