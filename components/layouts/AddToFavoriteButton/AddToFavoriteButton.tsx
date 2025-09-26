import { IconButton } from "@/components/ui";
import { Heart } from "@/components/ui/icons";

type AddToFavoriteButtonT = {
  className?: string;
};

const AddToFavoriteButton: React.FC<AddToFavoriteButtonT> = ({
  className = "",
}) => {
  return (
    <IconButton color="orange" isFilled={false} className={className}>
      <Heart className="text-orange text-lg! laptop:text-3xl!" />
    </IconButton>
  );
};

export default AddToFavoriteButton;
