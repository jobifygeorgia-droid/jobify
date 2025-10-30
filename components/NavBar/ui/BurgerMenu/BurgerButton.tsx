import { Close, BurgerMenu } from "@/components/ui/icons";

type BurgerButtonT = {
  isOpen: boolean;
  onToggleMenu: () => void;
};

const BurgerButton: React.FC<BurgerButtonT> = ({ isOpen, onToggleMenu }) => {
  return (
    <button
      onClick={onToggleMenu}
      className="laptop:hidden ml-auto flex items-center justify-center relative z-[9999] cursor-pointer"
    >
      {isOpen ? <Close size={32} /> : <BurgerMenu size={32} />}
    </button>
  );
};

export default BurgerButton;
