import { Button } from "@/components/ui";

type ArrayFieldsControlT = {
  onAdd: () => void;
  onRemove: () => void;
};

const ArrayFieldsControl: React.FC<ArrayFieldsControlT> = (props) => {
  const { onAdd, onRemove } = props;

  return (
    <div className="flex items-center gap-6">
      <Button fullWidth buttonType="tertiary" onClick={onRemove} type="button">
        გაუქმება
      </Button>

      <Button fullWidth buttonType="primary" type="button" onClick={onAdd}>
        დამატება
      </Button>
    </div>
  );
};

export default ArrayFieldsControl;
