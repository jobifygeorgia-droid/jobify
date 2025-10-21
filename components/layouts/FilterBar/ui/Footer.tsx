import { Button } from "@/components/ui";
import { useFilterContext } from "../FilterProvider";

const Footer: React.FC = () => {
  const { onCloseFilter } = useFilterContext();

  return (
    <div className="h-max flex-1 flex items-center justify-end gap-3 bg-white py-4 border-t border-t-bc sticky z-[9999]">
      <Button
        textSize="sm"
        justify="center"
        className="w-40!"
        buttonType="tertiary"
        onClick={onCloseFilter}
      >
        გაუქმება
      </Button>

      <Button buttonType="primary" textSize="sm" type="submit">
        გაფილტვრა
      </Button>
    </div>
  );
};

export default Footer;
