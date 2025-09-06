import { Button } from "@/components/ui";

type ArrayFieldsControlT = {
  onAppend: () => void;
};

const ArrayFieldsControl: React.FC<ArrayFieldsControlT> = (props) => {
  const { onAppend } = props;

  return (
    <div className="flex items-center justify-end">
      <Button>გაუქმება</Button>
      <Button
        buttonType="secondary"
        type="button"
        onClick={onAppend}
        rounded="base"
      >
        დამატება
      </Button>
    </div>
  );
};

export default ArrayFieldsControl;
