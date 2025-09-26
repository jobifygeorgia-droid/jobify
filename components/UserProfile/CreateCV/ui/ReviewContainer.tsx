import { Button } from "@/components/ui";
import { Delete, Edit } from "@/components/ui/icons";

type ReviewContainerT = {
  children: React.ReactNode;
  onEdit: () => void;
  onDelete: () => void;
};

const ReviewContainer: React.FC<ReviewContainerT> = (props) => {
  const { children, onEdit, onDelete } = props;

  return (
    <div className="bg-blue-light py-3 px-5 rounded-3xl flex items-start">
      <div className="grid grid-cols-2 gap-4 w-full">{children}</div>

      <div className="ml-auto flex flex-col gap-4">
        <Button className="text-orange p-0!" type="button" onClick={onEdit}>
          <Edit />
        </Button>

        <Button className="text-red p-0!" type="button" onClick={onDelete}>
          <Delete />
        </Button>
      </div>
    </div>
  );
};

export default ReviewContainer;
