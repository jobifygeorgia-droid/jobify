import { IconButton } from "@/components/ui";
import { Heart } from "@/components/ui/icons";
import classNames from "classnames";

type AddToFavoriteButtonT = {
  className?: string;
};

const AddToFavoriteButton: React.FC<AddToFavoriteButtonT> = ({
  className = "",
}) => {
  return (
    <IconButton
      size="sm"
      color="orange"
      isFilled={false}
      className={classNames(className, " text-lg! laptop:text-2xl!")}
    >
      <Heart className="text-orange inherit-font-size" />
    </IconButton>
  );
};

export default AddToFavoriteButton;
