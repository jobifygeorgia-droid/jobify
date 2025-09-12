import { Button } from "@/components/ui";

const Footer: React.FC = () => {
  return (
    <div className="h-max flex-1 flex items-center justify-end gap-3 bg-white py-4 border-t border-t-bc sticky z-[9999]">
      <Button
        buttonType="tertiary"
        justify="center"
        textSize="sm"
        className="w-40!"
      >
        გაუქმება
      </Button>
      <Button buttonType="primary" textSize="sm" className="w-40!">
        გაფილტვრა
      </Button>
    </div>
  );
};

export default Footer;
