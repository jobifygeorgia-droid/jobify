import { IconButton } from "@/components/ui";
import { Heart } from "@/components/ui/icons";

type AddToFavoriteButtonT = {};

const AddToFavoriteButton: React.FC<AddToFavoriteButtonT> = () => {
  return (
    <IconButton color="orange" isFilled={false}>
      <Heart className="stroke-orange fill-orange" />
    </IconButton>
  );
};

export default AddToFavoriteButton;
