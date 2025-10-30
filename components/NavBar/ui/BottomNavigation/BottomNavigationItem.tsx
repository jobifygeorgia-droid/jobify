import { AnchorButton } from "@/components/ui";

type BottomNavigationItemT = {
  href: string;
  title: string;
  children: React.ReactNode;
};

const BottomNavigationItem: React.FC<BottomNavigationItemT> = (props) => {
  const { href, children, title } = props;

  return (
    <AnchorButton href={href} className="flex flex-col gap-1 p-0! text-center">
      {children}
      <span className="text-sm hidden tablet:block">{title}</span>
    </AnchorButton>
  );
};

export default BottomNavigationItem;
