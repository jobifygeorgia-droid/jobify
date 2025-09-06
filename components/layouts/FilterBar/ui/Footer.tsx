import { Button } from "@/components/ui";

const Footer: React.FC = () => {
  return (
    <div className="h-max flex-1 flex items-center justify-end gap-3 bg-white py-4 border-t border-t-bc sticky z-[9999]">
      <Button buttonType="text">გაუქმება</Button>
      <Button buttonType="primary" rounded="base">
        გაფილტვრა
      </Button>
    </div>
  );
};

export default Footer;
